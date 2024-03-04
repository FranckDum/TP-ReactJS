// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Accueil from './components/accueil'
import Navbar from "./components/navbar";
import YgoAPI from './components/API';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
                <Route path="/" Component={Accueil} />
                <Route path="/apiCyberDragon" element={<YgoAPI requete="archetype=Cyber%20Dragon&language=fr" />} />
                <Route path="/apiCyberTénébreux" element={<YgoAPI requete="archetype=Cyberdark&language=fr" />} />
                <Route path="/apiDarkMagician" element={<YgoAPI requete="archetype=Dark%20Magician&language=fr" />} />
                <Route path="/apiBlueEyes" element={<YgoAPI requete="archetype=Blue-Eyes&language=fr" />} />
            </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
