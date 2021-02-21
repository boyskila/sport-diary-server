import React from 'react'
import { Footer } from '../client/layout/Footer'
import { Header } from '../client/layout/Header'
import { Main } from '../client/layout/Main'

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
