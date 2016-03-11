!(function() {
  // helpers
  const randomHex = (options) => {
    const random = Math.floor(Math.random() * 16777215).toString(16)
    return random.length === 6 && !_.contains(options.ignore, random) ? random : randomHex(options)
  }

  this.placeholder = {
    color: (query) => {
      let elements = document.querySelectorAll(query)

      for (let i = 0; i < elements.length; i++) {
        let element = elements[i]
        element.style.background = '#' + randomHex({ignore: 'ffffff'})
      }
    }
  }
})()
