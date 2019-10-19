// Used when modal overlay or on dedicated shot page
var OVERLAY_IMAGE = document
  .querySelector('.shot-media-container .media-content img')
  .getAttribute('src')

// Returns node list, used when several attachments in modal
var OVERLAY_IMAGE_CAROUSEL = document.querySelectorAll(
  '.shot-media-container .media-content img'
)

// Used for videos
var OVERLAY_VIDEO = document
  .querySelector('.shot-media-container .media-content video')
  .getAttribute('src')

// Used for videos w/ carousel
var OVERLAY_VIDEO_CAROUSEL = document.querySelectorAll(
  '.shot-media-container .media-content video'
)

// Used for fullscreen attachment image
var EXTENDED_IMAGE = document.querySelector('#media-viewer img')

// Used for fullscreen attachment video
var EXTENDED_VIDEO = document
  .querySelector('.video-container video')
  .getAttribute('src')

var links = []
var getLinks = () => {
  links.push(
    document
      .querySelector('.shot-media-container .media-content img')
      .getAttribute('src')
  )
}

chrome.runtime.sendMessage({ link: getLinks() })
