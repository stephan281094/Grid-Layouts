!(function() {
  // helpers
  function randomHex(options) {
    var random = Math.floor(Math.random() * 16777215).toString(16)
    return random.length === 6 && !_.contains(options.ignore, random) ? random : randomHex(options)
  }

  this.placeholder = {
    color: function(query) {
      var elements = document.querySelectorAll(query)

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        element.style.background = '#' + randomHex({ignore: 'ffffff'})
      }
    }
  }
})()
