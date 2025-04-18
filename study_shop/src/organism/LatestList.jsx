import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

import { getProductData } from '../api/productApi'

import css from './LatestList.module.css'

const LatestList = () => {
  const [product, setProduct] = useState([])
  const [count, setCount] = useState(6)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductData(`category=new&_limit=${count}`)

        setProduct(data)
      } catch (err) {
        console.log('err----', err)
      }
    }
    fetchProduct()
  }, [count])

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
        {product.map(data => (
          <li key={data.id}>
            <ProductCard data={data} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LatestList
