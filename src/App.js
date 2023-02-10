import './App.css';
import NavBar from './components/navBar';
import Landing from './pages/landing';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import SuccessfulRegister from './pages/successful_register';

function App() {
  return (
    <div className="App">
      <NavBar login={true} />
      <SuccessfulRegister />
    </div>
  );
}

export default App;
