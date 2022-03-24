import React, { useEffect, useRef, useState } from "react"

export const Carrousel = ({ images, isLoading }) => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(true)
  let carrouselRef = useRef("")

  useEffect(() => {
    if (!isLoading) {
      const carrousel = carrouselRef.current
      let carrouselImages = carrousel.children
      const lastCarrouselImage = carrouselImages[carrouselImages.length - 1]
      carrousel.insertAdjacentElement("afterbegin", lastCarrouselImage)
    }
  }, [isLoading])

  const nextImg = () => {
    if (isAnimationFinished) {
      setIsAnimationFinished(false)
      const carrousel = carrouselRef.current
      let carrouselImages = carrousel.children
      carrousel.style.transition = "all 0.5s"
      carrousel.style.left = "-200%"

      setTimeout(() => {
        const firstCarrouselImage = carrouselImages[0]
        carrousel.insertAdjacentElement("beforeend", firstCarrouselImage)
        carrousel.style.transition = "all 0s"
        carrousel.style.left = "-100%"
        setIsAnimationFinished(true)
      }, 500)
    }
  }

  const prevImg = () => {
    if (isAnimationFinished) {
      setIsAnimationFinished(false)

      const carrousel = carrouselRef.current
      let carrouselImages = carrousel.children
      carrousel.style.transition = "all 0.5s"
      carrousel.style.left = "0"

      setTimeout(() => {
        const lastCarrouselImage = carrouselImages[carrouselImages.length - 1]
        carrousel.insertAdjacentElement("afterbegin", lastCarrouselImage)
        carrousel.style.transition = "all 0s"
        carrousel.style.left = "-100%"
        setIsAnimationFinished(true)
      }, 500)
    }
  }

  return (
    <div className="carrousel-ctn">
      <div className="carrousel" ref={carrouselRef}>
        {!isLoading &&
          images.map((url, index) => (
            <div className="carrousel__img-ctn">
              <img alt="slider-img" src={url} key={index} />
            </div>
          ))}
      </div>
      <div className="carrousel-controls">
        <button className="carrousel-btn-left" onClick={prevImg}>
          <i className="fi fi-angle-left"></i>
        </button>
        <button className="carrousel-btn-right" onClick={nextImg}>
          <i className="fi fi-angle-right"></i>
        </button>
      </div>
    </div>
  )
}
