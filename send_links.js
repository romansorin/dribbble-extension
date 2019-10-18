var links = document
  .querySelector('.shot-media-container .media-content img')
  .getAttribute('src')

chrome.runtime.sendMessage({ link: links })
