// @barge suite:"Homepage"

var page = require('webpage').create();

page.onInitialized = function() {
  page.evaluate(function(domContentLoadedMsg) {
    document.addEventListener('DOMContentLoaded', function() {
      window.callPhantom('DOMContentLoaded');
    }, false);
  });
};

page.onCallback = function(data) {
  // your code here
  console.log('DOMContentLoaded');
  phantom.exit(0);
};

page.open('http://www.bargeapp.com');