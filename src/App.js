import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import AddressBook from './AddressBook';
import Groups from './Groups';
import {useState, useEffect} from'react';
import Favorites from './Favorites';
import { ContactProvider } from './MyContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Form from './Form';

function App() {

  return (
    <Router>
      <ContactProvider>
        <NavBar />
        <div className="app">
          <Routes>
            <Route path="/" element={<AddressBook />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </ContactProvider>
    </Router>
  );
}

export default App;
