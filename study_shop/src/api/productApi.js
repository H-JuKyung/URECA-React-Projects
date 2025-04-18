import axios from 'axios'
const BASE_URL = 'http://localhost:3000/products'

export const getProductData = async (query = '') => {
  try {
    const res = await axios.get(`${BASE_URL}/?${query}`)
    return res.data
  } catch (err) {
    console.log('err----', err)
    // throw err
  }
}
