/* Press — progressive enhancement for /assets/css/press.css.
   Every page reads fine without this file; it only adds motion. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  /* ---- the 3D book: drag to turn it, it settles back ---- */
  document.querySelectorAll('[data-book]').forEach((book) => {
    const rest = { x: 6, y: 28 };
    let rx = rest.x, ry = rest.y, drag = null;
    const set = () => {
      book.style.setProperty('--rx', rx + 'deg');
      book.style.setProperty('--ry', ry + 'deg');
    };

    if (!reduce) {
      // arrive spine-first, then turn to the cover
      book.classList.add('is-intro');
      // a timer rather than requestAnimationFrame: a page that never paints a frame must not keep the book on its spine
      setTimeout(() => { book.getBoundingClientRect(); book.classList.remove('is-intro'); }, 80);

      // a slow scroll-linked turn while the title page is on screen
      let ticking = false;
      addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          book.style.setProperty('--sry', clamp(scrollY * 0.06, 0, 40) + 'deg');
          ticking = false;
        });
      }, { passive: true });
    }

    book.addEventListener('pointerdown', (e) => {
      drag = { x: e.clientX, y: e.clientY, rx, ry };
      book.setPointerCapture(e.pointerId);
      book.classList.add('is-dragging');
    });
    book.addEventListener('pointermove', (e) => {
      if (!drag) return;
      ry = drag.ry + (e.clientX - drag.x) * 0.55;
      rx = clamp(drag.rx - (e.clientY - drag.y) * 0.3, -40, 40);
      set();
    });
    const release = () => {
      if (!drag) return;
      drag = null;
      book.classList.remove('is-dragging');
      // settle to the resting pose by the shortest way round
      rx = rest.x;
      ry = rest.y + Math.round((ry - rest.y) / 360) * 360;
      set();
    };
    book.addEventListener('pointerup', release);
    book.addEventListener('pointercancel', release);
  });

  /* ---- chapter rail on posts: one tick per chapter, filling as you read ---- */
  const chapters = [...document.querySelectorAll('.press-post main.content h2[id]')];
  if (chapters.length > 2) {
    const rail = document.createElement('nav');
    rail.className = 'press-rail';
    rail.setAttribute('aria-label', 'Chapters');
    const links = chapters.map((h) => {
      const a = document.createElement('a');
      a.href = '#' + h.id;
      const label = [...h.childNodes]
        .filter((n) => !(n.nodeType === 1 && n.classList.contains('sec-num')))
        .map((n) => n.textContent).join('').trim();
      a.innerHTML = '<span class="press-rail__tick"><span class="press-rail__fill"></span></span><span class="press-rail__label"></span>';
      a.querySelector('.press-rail__label').textContent = label;
      rail.appendChild(a);
      return a;
    });
    document.body.appendChild(rail);

    const main = document.querySelector('main.content');
    let ticking = false;
    const update = () => {
      ticking = false;
      const mid = innerHeight * 0.35;
      const end = main.getBoundingClientRect().bottom;
      rail.classList.toggle('is-visible', chapters[0].getBoundingClientRect().top < innerHeight && end > mid);
      chapters.forEach((h, i) => {
        const top = h.getBoundingClientRect().top;
        const next = chapters[i + 1] ? chapters[i + 1].getBoundingClientRect().top : end;
        const p = clamp((mid - top) / Math.max(1, next - top), 0, 1);
        links[i].style.setProperty('--p', p);
        links[i].classList.toggle('is-active', p > 0 && p < 1);
      });
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
  }

  /* ---- the shelf on the home page: point at a volume to open it ---- */
  const shelf = document.querySelector('.shelf');
  if (shelf) {
    const spines = [...shelf.querySelectorAll('.spine[data-vol]')];
    const volumes = [...shelf.querySelectorAll('.volume[data-vol]')];
    const vols = spines.map((s) => s.dataset.vol);
    const open = (vol) => {
      vols.forEach((v) => shelf.classList.toggle('vol--' + v, v === vol));
      spines.forEach((s) => s.classList.toggle('is-active', s.dataset.vol === vol));
      volumes.forEach((v) => v.classList.toggle('is-active', v.dataset.vol === vol));
    };
    shelf.classList.add('is-js');
    spines.forEach((s) => {
      s.addEventListener('pointerenter', () => open(s.dataset.vol));
      s.addEventListener('focus', () => open(s.dataset.vol));
    });
    open(vols[0]);
  }
})();
