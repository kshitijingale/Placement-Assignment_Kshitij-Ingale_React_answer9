import './App.css';
import HeroSection from './components/HeroSection';
import context from './context/context';
import { useState } from 'react';
import ThemeToggler from './components/ThemeToggler';

function App() {
  const themeMode = useState("light")
  return (
    <>
      <context.Provider value={themeMode}>
        <ThemeToggler />
        <HeroSection />
      </context.Provider>
    </>
  );
}

export default App;
