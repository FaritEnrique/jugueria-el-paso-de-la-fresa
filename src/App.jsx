import React from 'react'
import HomePage from './pages/HomePage'
//import Header from './components/Header'
//import OrderPage from './pages/OrderPage'
//import PoliticasPage from './pages/PoliticasPage'
//import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <>
      <HomePage />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Header />}>
    //       <Route path='/' element={<HomePage />} />
    //       <Route path='/order' element={<OrderPage />} />
    //       <Route path='/politicas' element={<PoliticasPage />} />
    //       <Route path='/register' element={<RegisterPage />} />

    //       <Route path='/characters/:id' element={<CharacterPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App