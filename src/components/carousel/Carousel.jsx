import React , {useEffect, useRef}from 'react'

import './Carousel.css'
import slider1 from '../../assets/images/slider-1-long.webp'
import slider2 from '../../assets/images/slider-2-long.webp'
import slider3 from '../../assets/images/slider-3-long.webp'
import slider4 from '../../assets/images/slider-4-long.webp'
import slider5 from '../../assets/images/slider-5-long.webp'

export const Carousel = () => {

    let carrouselRef = useRef('')

    useEffect(()=>{

        const carrousel = carrouselRef.current
        let carrouselImages = carrousel.children
        const lastCarrouselImage = carrouselImages[carrouselImages.length - 1]
        carrousel.insertAdjacentElement('afterbegin', lastCarrouselImage)

    }, [])

    const nextImg = ()=>{
        const carrousel = carrouselRef.current
        let carrouselImages = carrousel.children
        carrousel.style.transition = 'all 0.5s'
        carrousel.style.left = '-200%'

        setTimeout(()=>{
            const firstCarrouselImage = carrouselImages[0]
            carrousel.insertAdjacentElement('beforeend', firstCarrouselImage)
            carrousel.style.transition = 'all 0s'
            carrousel.style.left = '-100%'
        }, 500)
    }
    
    const prevImg = ()=>{
        const carrousel = carrouselRef.current
        let carrouselImages = carrousel.children
        carrousel.style.transition = 'all 0.5s'
        carrousel.style.left = '0'

        setTimeout(()=>{
            const lastCarrouselImage = carrouselImages[carrouselImages.length - 1]
            carrousel.insertAdjacentElement('afterbegin', lastCarrouselImage)
            carrousel.style.transition = 'all 0s'
            carrousel.style.left = '-100%'
        }, 500)
    }


    return (
        <div className='carousel-ctn'>
            <div className='carousel' ref={carrouselRef}>
                <img alt='' className="active" src={slider1} />
                <img alt='' className="inactive" src={slider3} />
                <img alt='' className="inactive" src={slider4} />
                <img alt='' className="inactive" src={slider2} />
                <img alt='' className="inactive" src={slider5} />
            </div>
            <div className='carousel-controls'>
                <button className='carousel-btn-left' onClick={prevImg}>
                    <i className='fi fi-angle-left'></i>
                </button>
                <button className='carousel-btn-right'onClick={nextImg}>
                    <i className='fi fi-angle-right'></i>
                </button>
            </div>
        </div>
    )
}