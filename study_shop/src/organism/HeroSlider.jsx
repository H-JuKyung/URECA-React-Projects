import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import css from './HeroSlider.module.css'
import { Link } from 'react-router-dom'

import { getBannerData } from '../api/bannerApi'

const HeroSlider = () => {
  const [banner, setBanner] = useState([])
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBannerData()
        console.log('data----', data)
        setBanner(data)
      } catch (err) {
        console.log('err----', err)
      }
    }
    fetchBanner()
  }, [])

  return (
    <section>
      <h2 hidden>Banner Event</h2>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className={css.mainSlider}>
        {banner.map(item => (
          <SwiperSlide key={item.id}>
            <div className={css.imgWrap}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={css.textWrap}>
              <p className={css.title}>{item.title}</p>
              <p className={css.desc}>{item.description}</p>
              <Link to={item.link} className={css.more}>
                View Product
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSlider
