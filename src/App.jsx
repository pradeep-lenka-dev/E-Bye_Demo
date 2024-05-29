import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import Header from './componet/layout/Header'
import Footer from './componet/layout/Fotter'

function App() {

  return (
    <>
    <Header />
     <AppRoutes />
     {/* <Footer /> */}
    </>
  )
}

export default App
