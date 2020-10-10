(function(){(function injection() {
  var pageLang = 'en';
  var userLang = navigator.language ;

  var uid = '';
  var tranId = 'TE_' + uid;
  var cbId = 'TECB_' + uid;

  function show() {
    window.setTimeout(function() {
      window[tranId].showBanner(true);
    }, 10);
  }

  function newElem() {
    var elem = new google.translate.TranslateElement({
      autoDisplay: false,
      floatPosition: 0,
      multilanguagePage: true,
      pageLanguage: pageLang
    });
    return elem;
  }

  if (window[tranId]) {
    show();
  } else {
    if (!window.google || !google.translate ||
        !google.translate.TranslateElement) {
      if (!window[cbId]) {
        window[cbId] = function() {
          window[tranId] = newElem();
          show();
        };
      }
      var s = document.createElement('script');
      s.src = 'https://translate.google.com/translate_a/element.js?cb=' +
              encodeURIComponent(cbId) + '&client=tee&hl=' + userLang;
      document.getElementsByTagName('head')[0].appendChild(s);
    }
  }
 
})();})();