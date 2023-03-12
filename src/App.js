import './App.css';
import Bill from './components/bill';
import NavBar from './components/navBar';
import BillPage from './pages/billPage';
import BillsPage from './pages/billsPage';
import ContactUsPage from './pages/contact_usPage';
import HomePage from './pages/homePage';
import Landing from './pages/landing';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import SuccessfulRegister from './pages/successful_register';
import TransferMoneyPage from './pages/transfer_moneyPage';
import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom';
import React, { useState } from 'react';

export const isLoggedContext = React.createContext(false)

function App() {

  const [isLogged, setIsLogged] = useState(false);

  const setLogIn = (isLogged)=>{
    setIsLogged(isLogged);
  }

  return (
    <Router>
      <isLoggedContext.Provider value={isLogged}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Landing />} ></Route>
            <Route exact path='/login' element={<LoginPage setLogIn = {setLogIn} />} ></Route>
            <Route exact path='/register' element={<RegisterPage />} ></Route>
            <Route exact path='/home' element={<HomePage />} ></Route>
            <Route exact path='/successful-registeration' element={<SuccessfulRegister />} ></Route>
            <Route exact path='/paybills' element={<BillsPage />} ></Route>
            <Route exact path='/bill/:billId' element={<BillPage />} ></Route>
            <Route exact path='/contactUs' element={<ContactUsPage />} ></Route>
            <Route exact path='/transferMoney' element={<TransferMoneyPage />} ></Route>

          </Routes>

        </div>
      </isLoggedContext.Provider>
    </Router>
  );
}

export default App;
