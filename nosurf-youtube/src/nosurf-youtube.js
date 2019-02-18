(function () {
  'use strict'

  var h2s = document.getElementsByTagName('ytd-compact-autoplay-renderer')
  hide(getParent(select(h2s, 'Up next')))

  function hide (section) {
    if (!section) return showError()
    section.style.display = 'none'
  }

  function getParent (h2) {
    if (!h2) return showError()
    try {
      return h2.parentNode.parentNode.parentNode.parentElement
    } catch (error) {
      showError()
    }
  }

  function select (h2s, headerText) {
    if (h2s.length < 1) return showError()
    for (var i = 0; i < h2s.length; i++) {
      for (var j = 0; j < h2s[i].childElementCount; j++) {
        const text = h2s[i].children[j].innerText
        if (text.includes(headerText)) {
          return h2s[i].children[j]
        }
      }
    }
  }

  function showError () {
    // eslint-disable-next-line no-console
    console.error('Error: No Recs browser add-on: YouTube has changed the structure of its homepage which is preventing this add-on from hiding the Recommended section. Ensure you are using the most recent version of the add-on. If you are, please add a new issue here: https://github.com/don-smith/no-recs/issues.')
  }
})()
