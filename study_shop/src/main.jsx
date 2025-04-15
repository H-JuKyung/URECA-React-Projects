import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap Icons 가져오기
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'swiper/css'
import 'swiper/css/pagination'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
