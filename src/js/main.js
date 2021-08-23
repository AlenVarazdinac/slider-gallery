import '../css/style.scss'
import './jquery-import'

const image01 = require('../images/slider-image-7.jpg')
const image02 = require('../images/slider-image-6.jpg')
const image03 = require('../images/slider-image-9.jpg')
const image04 = require('../images/slider-image-8.jpg')
const image05 = require('../images/slider-image-5.jpg')
const image06 = require('../images/slider-image-4.jpg')
const image07 = require('../images/slider-image-1.jpg')
const image08 = require('../images/slider-image-2.jpg')
const image09 = require('../images/slider-image-3.jpg')

$(() => {
  const images = [
    { url: image01 },
    { url: image02 },
    { url: image03 },
    { url: image04 },
    { url: image05 },
    { url: image06 },
    { url: image07 },
    { url: image08 },
    { url: image09 }
  ]

  // Calculate images for sorting in rows
  const sortedImages = images.map((image, index) => {
    if (Math.ceil(images.length / 2) >= index + 1) {
      return { image: image.url, position: 'top' }
    } else {
      return { image: image.url, position: 'bottom' }
    }
  })

  console.log('sortedImages', sortedImages)

  // Sort images in top and bottom rows
  sortedImages.forEach((image, index) => {
    setImagePosition(image, index)
  })

  // Previous slide
  $('#prevSlideControl').on('click', () => {
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
  })

  // Next slide
  $('#nextSlideControl').on('click', () => {
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
  })
})

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
