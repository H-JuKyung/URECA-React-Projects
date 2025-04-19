import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { getProductData } from '../api/productApi'

import css from './LatestList.module.css'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const LatestList = () => {
  const [product, setProduct] = useState([])
  const [count, setCount] = useState(6)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const data = await getProductData(`category=new&_limit=${count}`)

        await delay(3000) // 스켈레톤 UI 확인을 위한 3초 지연

        setProduct(data)
        setLoading(false)
      } catch (err) {
        console.log('err----', err)
        setLoading(false)
      }
    }
    fetchProduct()
  }, [count])

  const skeletonArr = Array(count).fill(null)
  return (
    <section className={css.listCon}>
      <h2>Shop The Latest</h2>
      <Link to={'./shop'} className={css.moreList}>
        View All
      </Link>
      <div className={css.select}>
        옵션 :
        <select
          name="productCnt"
          id="productCnt"
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        >
          <option value="2">2개</option>
          <option value="4">4개</option>
          <option value="6">6개</option>
        </select>
      </div>
      <ul className={css.list}>
        {loading
          ? skeletonArr.map((_, i) => (
              <li key={i}>
                <ProductCardSkeleton />
              </li>
            ))
          : product.map(data => (
              <li key={data.id}>
                <ProductCard data={data} />
              </li>
            ))}
      </ul>
    </section>
  )
}

export default LatestList
