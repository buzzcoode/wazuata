import { useEffect, useState } from 'react'

import { Layout } from "../components/Layout"
import { ThumbImage } from '../components/ThumbImage'

import { arrowIcon } from '../assets/icons'
import { closeIcon } from '../assets/icons'

import { bigShoe1 } from '../assets/images'
import { bigShoe2 } from '../assets/images'
import { bigShoe3 } from '../assets/images'
import { bigShoe4 } from '../assets/images'
import { thumbnailShoe1 } from '../assets/images'
import { thumbnailShoe2 } from '../assets/images'
import { thumbnailShoe3 } from '../assets/images'
import { thumbnailShoe4 } from '../assets/images'

export const GalleryPage = () => {
  const [dataImgCurrent, setDataImgCurrent] = useState(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const imageList = [
    bigShoe1, 
    bigShoe2, 
    bigShoe3, 
    bigShoe4, 
    thumbnailShoe1, 
    thumbnailShoe2, 
    thumbnailShoe3, 
    thumbnailShoe4
  ]

  const isOpen = dataImgCurrent !== null

  const handleClickToOpenImage = (index) => {
    setCurrentIndex(index)
    setDataImgCurrent(imageList[index])
  }

  const handleClickToCloseImage = () => {
    setDataImgCurrent(null)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClickToCloseImage
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleNavigate = (direction) => {
    let index = direction === 'next' ? currentIndex + 1 : currentIndex - 1
    if (index < 0) {
      index = imageList.length - 1
    }

    if (index >= imageList.length) {
      index = 0
    }

    setCurrentIndex(index)
    setDataImgCurrent(imageList[index])
  }

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-32 pb-10 max-container">
        <div className="grid grid-cols-4 gap-3">
          {imageList.map((img, index) => (
            <ThumbImage
              key={index}
              srcImage={img}
              onClick={() => handleClickToOpenImage(index)}
            />
          ))}
        </div>
      </section>
      {isOpen && (
        <div className="flex items-center justify-center fixed inset-0 w-full h-full z-30 bg-black bg-opacity-50 gap-4">
          <button
            className="absolute top-5 right-5 w-10"
            onClick={handleClickToCloseImage}
          >
            <img src={closeIcon} alt="Button Close" />
          </button>
          <button
            className="w-12 rotate-180 hover:opacity-50 transition-opacity ease-linear"
            onClick={() => handleNavigate('previus')}
          >
            <img src={arrowIcon} alt="Arrow Previous" />
          </button>
          {dataImgCurrent && (
            <img src={dataImgCurrent} alt="Image" width={500} />
          )}
          <button
            className="w-12 hover:opacity-50 transition-opacity ease-linear"
            onClick={() => handleNavigate('next')}
          >
            <img src={arrowIcon} alt="Arrow Next" />
          </button>
        </div>
      )}
    </Layout>
  )
}