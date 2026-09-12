// DIVE MARU — header state, mobile nav, current year
(function () {
  var ham = document.querySelector('.ham');
  var mnav = document.getElementById('mnav');

  function closeNav() {
    if (!mnav || mnav.hidden) return;
    mnav.hidden = true;
    ham.setAttribute('aria-expanded', 'false');
    ham.setAttribute('aria-label', '메뉴 열기');
    document.body.classList.remove('is-locked');
  }

  if (ham && mnav) {
    ham.addEventListener('click', function () {
      var open = mnav.hidden;
      mnav.hidden = !open;
      ham.setAttribute('aria-expanded', String(open));
      ham.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
      document.body.classList.toggle('is-locked', open);
    });
    mnav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) closeNav();
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
