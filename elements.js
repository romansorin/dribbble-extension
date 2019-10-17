// Used when modal overlay or on dedicated shot page
const OVERLAY_IMAGE = document
  .querySelector('.shot-media-container .media-content img')
  .getAttribute('src')

// Returns node list, used when several attachments in modal
const OVERLAY_IMAGE_CAROUSEL = document.querySelectorAll(
  '.shot-media-container .media-content img'
)

// Used for videos
const OVERLAY_VIDEO = document
  .querySelector('.shot-media-container .media-content video')
  .getAttribute('src')

// Used for videos w/ carousel
const OVERLAY_VIDEO_CAROUSEL = document.querySelectorAll(
  '.shot-media-container .media-content video'
)

// Used for fullscreen attachment image
const EXTENDED_IMAGE = document.querySelector('#media-viewer img')

// Used for fullscreen attachment video
const EXTENDED_VIDEO = document
  .querySelector('.video-container video')
  .getAttribute('src')
