setTimeout(function () {
  var ads = document.querySelectorAll('.result--ad--good')
  ads.forEach(function (ad) { ad.remove() })
  // Maybe theres a better way to see if AJAX completed and DOM update was rendered
}, 500)
