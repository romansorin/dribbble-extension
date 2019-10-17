// this is the background code...

// listen for our browerAction to be clicked
chrome.tabs.getCurrent(function (tab) {
  console.log(tab)
  // for the current tab, inject the "inject.js" file & execute it
  //   chrome.tabs.executeScript(
  //     tab.ib,
  //     {
  //       file: 'inject.js'
  //     },
  //     console.log('hello')
  //   )
})

// chrome.tabs.create({})

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs)
})
