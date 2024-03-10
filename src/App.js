import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import AddressBook from './AddressBook';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <AddressBook />
    </div>
  );
}

export default App;
