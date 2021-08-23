import '../css/style.scss'
import './jquery-import'
const sliderHelper = require('./slider-helper')

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

  // Sort images in top and bottom rows
  sortedImages.forEach((image, index) => {
    sliderHelper.setImagePosition(image, index)
  })

  // Previous slide
  $('#prevSlideControl').on('click', () => sliderHelper.previousSlide())

  // Next slide
  $('#nextSlideControl').on('click', () => sliderHelper.nextSlide())
})
