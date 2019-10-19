chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  request.link.map(link => {
    document.body.appendChild(`<p>${link}</p>`)
  })
})

window.onload = function () {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (
      activeTabs
    ) {
      chrome.tabs.executeScript(activeTabs[0].id, {
        file: 'send_links.js',
        allFrames: true
      })
    })
  })
}
