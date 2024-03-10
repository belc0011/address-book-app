import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import AddressBook from './AddressBook';
import Groups from './Groups';

function App() {
  
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <AddressBook />
      <Groups />
    </div>
  );
}

export default App;
