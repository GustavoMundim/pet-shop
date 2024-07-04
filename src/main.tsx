import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyled } from '../src/styles/GlobalStyles'

import { register } from 'swiper/element/bundle'


register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
