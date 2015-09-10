!(function() {
  // helpers
  function randomHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  this.placeholder = {
    color: function(query) {
      var elements = document.querySelectorAll(query);

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        element.style.background = randomHex();
      };
    }
  };
})();
