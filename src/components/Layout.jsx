import React from 'react'
import Header from './Header';
import Footer from './Footer'
import { Outlet } from "react-router-dom"


export const Layout = () => {
  return (
    <main className='bg-gray-300'>
        <Header />
        <Outlet />
        <Footer />
    </main>

  )
}
