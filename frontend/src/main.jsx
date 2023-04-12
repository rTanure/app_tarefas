import React from 'react'
import ReactDOM from 'react-dom/client'

import "./style/reset.css"
import "./style/global.css"


import RoutedPage from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutedPage/>
  </React.StrictMode>,
)
