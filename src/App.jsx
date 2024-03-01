import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Organizer } from './pages/Organizer.jsx';
import {Footer} from './components/Footer'

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <>
      <Routes>
        <Route exact path="/home" element={
          <>
            <Navbar theme={theme} handleThemeChange={handleThemeChange} />
            <Home theme={theme}/>
            <Footer />
          </>
        }
        />

        <Route exact path="/contact" element={
          <>
            <Navbar theme={theme} handleThemeChange={handleThemeChange} />
            <Organizer />
            <Footer />
          </>
        }
        />

        <Route exact path="/login" element={<Login theme={theme} />} />
      </Routes>
    </>
  );
}

export default App;
