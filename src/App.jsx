
import { useState, useMemo } from 'react'
import './App.css'
import Landing from './components/Landing';
import VantaBackground from './components/Background.jsx'
import { DarkThemeContext } from './context/DarkThemeContext.js'
import { SoundProvider } from './context/SoundProvider.jsx'
import { Routes, Route } from 'react-router-dom'
import NotAvailable from './components/NotAvailable';


function App() {

  const [isDark, setIsDark] = useState("dark")

  const contextValue = useMemo(() => ({ isDark, setIsDark }), [isDark])

  return (
    <DarkThemeContext.Provider value={contextValue}>
      <SoundProvider>
        <div className={`min-h-screen ${isDark}`}>
          <VantaBackground />
          <div className="relative z-10">
            <Routes>
              {/* Main page */}
              <Route path="/" element={<Landing />} />
              {/* not available page */}
              <Route path="/not-available" element={<NotAvailable />} />
            </Routes>
          </div>
        </div>
      </SoundProvider>
    </DarkThemeContext.Provider>
  )
}

export default App
