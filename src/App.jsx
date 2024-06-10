import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RouterIndex from './router/RouterIndex'
import {BrowserRouter} from 'react-router-dom'


import Header from './components/Header'

import MainPage from './components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
    </>
  )
}

export default App
