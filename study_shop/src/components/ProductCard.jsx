import React from 'react'
import css from './ProductCard.module.css'

const ProductCard = ({ data }) => {
  return (
    <div className={css.card}>
      <div className={css.imgWrap}>
        <img src={`/public/img/${data.img}`} alt={data.title} />
        <span className={css.cate}>{data.category}</span>
        <span className={css.discount}>{data.discount}</span>
      </div>
      <div className={css.textWrap}>
        <strong className={css.title}>{data.title}</strong>
        <span className={css.price}>{data.price}</span>
      </div>
    </div>
  )
}

export default ProductCard
