(() => {
  const cursor = document.querySelector('.cursor-dot');
  const coarse = window.matchMedia('(pointer: coarse)').matches;

  if (cursor && !coarse) {
    let x = -100, y = -100, cx = -100, cy = -100;
    window.addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; });
    document.querySelectorAll('.interactive, a, button, input, textarea, .interactive-card').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
    const tick = () => {
      cx += (x - cx) * .22;
      cy += (y - cy) * .22;
      const size = cursor.classList.contains('hover') ? 48 : 10;
      cursor.style.transform = `translate(${cx - size/2}px,${cy - size/2}px)`;
      requestAnimationFrame(tick);
    };
    tick();
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .14, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const message = document.getElementById('senderMessage').value.trim();
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:monikahosssain25@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
