import React from 'react'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { Main } from './layout/Main'

export const App = () => {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
