import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Orders from './Orders';
import NotFound from './NotFound';
import Chef from './Chef';
import Customer from './Customer';
import Counter from './Counter';
import ChefLogin from './Login/ChefLogin';
import CashierLogin from './Login/CashierLogin';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Customer />} />
          <Route path='/Orders' element={<Orders />} />
          <Route path='/Chef' element={<Chef/>} />
          <Route path='/Counter' element={<Counter/>} />
          <Route path="/ChefLogin" element={<ChefLogin />} />
          <Route path="/CashierLogin" element={<CashierLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App