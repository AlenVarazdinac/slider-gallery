function previousSlide() {
  // Get first image from top row and its width
  const topRowFirstImage = $('.slider__wrapper--top').find('img:first')
  const topRowFirstImageWidth = topRowFirstImage.width()

  // Get first image from bottom row and its width
  const bottomRowFirstImage = $('.slider__wrapper--bottom').find(
    '.image-position-bottom:first'
  )
  const bottomRowFirstImageWidth = bottomRowFirstImage.width()

  $('.slider__wrapper--top').animate(
    { marginLeft: -topRowFirstImageWidth },
    {
      duration: 1000,
      queue: false,
      complete: () => {
        $('.slider__wrapper--top').append(topRowFirstImage)
        $('.slider__wrapper--top').css({ marginLeft: 0 })
      }
    }
  )

  $('.slider__wrapper--bottom').animate(
    { marginLeft: -bottomRowFirstImageWidth },
    {
      duration: 1000,
      queue: false,
      complete: () => {
        $('.slider__wrapper--bottom').append(bottomRowFirstImage)
        $('.slider__wrapper--bottom').css({ marginLeft: 0 })
      }
    }
  )
}

function nextSlide() {
  // Get last image from top row and its width
  const topRowLastImage = $('.slider__wrapper--top').find('img:last')
  const topRowLastImageWidth = topRowLastImage.width()

  // Get last image from bottom row and its width
  const bottomRowLastImage = $('.slider__wrapper--bottom').find(
    '.image-position-bottom:last'
  )
  const bottomRowLastImageWidth = bottomRowLastImage.width()

  $('.slider__wrapper--top').animate(
    { marginLeft: +topRowLastImageWidth },
    {
      duration: 1000,
      queue: false,
      complete: () => {
        $('.slider__wrapper--top').prepend(topRowLastImage)
        $('.slider__wrapper--top').css({ marginLeft: 0 })
      }
    }
  )

  $('.slider__wrapper--bottom').animate(
    { marginLeft: +bottomRowLastImageWidth },
    {
      duration: 1000,
      queue: false,
      complete: () => {
        $('.slider__wrapper--bottom').prepend(bottomRowLastImage)
        $('.slider__wrapper--bottom').css({ marginLeft: 0 })
      }
    }
  )
}

function setImagePosition(image, index) {
  $(selectImageRow(image.position)).append(
    `<img src="${image.image}" 
          alt="Slider image ${index}" 
          class="slider__wrapper__image image-position-${image.position}"
        />`
  )
}

function selectImageRow(imagePosition) {
  const selectedPosition = {
    top: '.slider__wrapper--top',
    bottom: '.slider__wrapper--bottom'
  }
  return selectedPosition[imagePosition]
}

module.exports = { previousSlide, nextSlide, setImagePosition }
