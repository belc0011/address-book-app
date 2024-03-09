import logo from './logo.svg';
import './App.css';
import AddressBook from './AddressBook';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <AddressBook />
      </BrowserRouter>
    </div>
  );
}

export default App;
