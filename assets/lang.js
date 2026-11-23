// Page d'accueil française uniquement : un visiteur qui a choisi EN, ou dont le
// navigateur n'est pas en français, est envoyé vers /en/. Un lien direct vers /en/
// reste toujours en anglais. (Fichier séparé : la politique de sécurité du contenu
// du site interdit les scripts écrits directement dans la page.)
(function () {
  var urlEn = document.documentElement.getAttribute('data-url-en');
  if (!urlEn) return;
  var pref = null;
  try { pref = localStorage.getItem('lang'); } catch (e) {}
  var nav = (navigator.language || 'fr').toLowerCase();
  var want = pref || (nav.indexOf('fr') === 0 ? 'fr' : 'en');
  if (want === 'en' && !/[?&]nolang/.test(location.search)) location.replace(urlEn);
})();
