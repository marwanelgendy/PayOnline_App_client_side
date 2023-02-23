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

function App() {
  return (
    <div className="App">
      <NavBar login={true} />
      <BillsPage />
    </div>
  );
}

export default App;
