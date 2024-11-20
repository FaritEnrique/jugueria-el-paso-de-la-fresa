import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OrderPage from './pages/OrderPage'
import PoliticasPage from './pages/PoliticasPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { Layout } from './components/Layout'
import AdminPage from './pages/AdminPage'
import EditarCremaPage from './components/EditarCremaPage'
import { Toaster } from 'sonner'

const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors position='top-center' />

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/politicas' element={<PoliticasPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/edit/crema/:id' element={<EditarCremaPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App