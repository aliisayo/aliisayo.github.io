// Enregistre une fois par visite chaque section réellement affichée à l'écran (GoatCounter, sans cookies).
(function () {
  if (!('IntersectionObserver' in window)) return;
  var seen = {}, queue = [];
  function send(id, title) {
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: 'section-' + id, title: 'Section : ' + title, event: true });
    } else {
      queue.push([id, title]);
    }
  }
  var flush = setInterval(function () {
    if (window.goatcounter && window.goatcounter.count) {
      clearInterval(flush);
      queue.splice(0).forEach(function (q) { send(q[0], q[1]); });
    }
  }, 500);
  setTimeout(function () { clearInterval(flush); }, 15000);
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var id = e.target.id;
      if (!e.isIntersecting || seen[id]) return;
      seen[id] = true;
      var h = e.target.querySelector('h2');
      send(id, h ? h.textContent.trim() : id);
    });
  }, { threshold: 0, rootMargin: '0px 0px -40% 0px' }); // compte dès que le haut de la section atteint 60 % de l'écran, même pour les longues sections sur mobile
  document.querySelectorAll('main section[id]').forEach(function (s) { io.observe(s); });
})();

// Retient la langue choisie avec le bouton FR / EN.
document.querySelectorAll('.lang-switch a').forEach(function (a) {
  a.addEventListener('click', function () {
    try { localStorage.setItem('lang', a.getAttribute('data-lang')); } catch (e) {}
  });
});
