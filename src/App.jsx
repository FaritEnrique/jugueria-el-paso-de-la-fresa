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
import EditarFrozenPage from './components/EditarFrozenPage'
import EditarFresaPage from './components/EditarFesaPage'
import EditarClientePage from './components/EditarClientePage'
import VerCremaId from './pages/VerCremaId'
import VerFrozenId from './pages/VerFrozenId'
import VerFresaId from './pages/VerFresaId'
import VerClienteId from './pages/VerClienteId'
import { Toaster } from 'sonner'
import GestionClientes from './pages/GestionClientes'

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
          <Route path='/ver/crema/:id' element={<VerCremaId />} />
          <Route path='/edit/frozen/:id' element={<EditarFrozenPage />} />
          <Route path='/ver/frozen/:id' element={<VerFrozenId />} />
          <Route path='/edit/fresa/:id' element={<EditarFresaPage />} />
          <Route path='/ver/fresa/:id' element={<VerFresaId />} />
          <Route path='/gestionCliente' element={<GestionClientes />} />
          <Route path='/edit/cliente/:id' element={<EditarClientePage />} />
          <Route path='/ver/cliente/:id' element={<VerClienteId />} />
          

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App