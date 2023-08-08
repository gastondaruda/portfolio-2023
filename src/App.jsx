//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { useContext } from 'react';
import { DarkModeContext, DarkModeProvider } from './context/DarkMode';
import { Routes, Route, Navigate, HashRouter} from 'react-router-dom';
import NavbarComponent from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'


function App() {

  return (
    <>
    <DarkModeProvider>
      <HashRouter >
            <NavbarComponent />
              <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </Routes>
      </HashRouter>
    </DarkModeProvider>
    </>
  )
}

export default App
