import React from "react";
import { inject, observer } from "mobx-react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./reactComponents/components/Header";
import DropMenu from "./reactComponents/components/DropMenu";

import NotFound from "./reactComponents/pages/NotFound";
import Popup from "./reactComponents/components/Popup";

import Me from "./reactComponents/pages/Me";
import About from "./reactComponents/pages/About";
import Projects from "./reactComponents/pages/Projects";
import Contact from "./reactComponents/pages/Contact";

import Animations from "./reactComponents/pages/Animations";

const App = inject( "ButtonsStore" )(
  observer(({ ButtonsStore }) => {
    const location = useLocation()

    function toggleDropMenu(){
      const dropMenu = document.getElementsByClassName('drop-menu__wrapper')[0]
      
      dropMenu.classList.toggle("drop-menu__open")
    }
  
    return (
      <>
      {
        ButtonsStore.popupMenu.status && 
          <Popup />
      }
      <Header toggleDropMenu={toggleDropMenu}/>
      <div className="flex flex-justify-center wrapper main__wrapper">
        <main className="flex main">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to='main'/>}/>
            <Route path="main" element={<Me />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
  
            <Route path="projects" element={<Projects />}/>
            <Route path="animations" element={<Animations />}/>
  
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </main>
        <DropMenu toggleDropMenu={toggleDropMenu}/>
      </div>
      </>
    );
  }
  )
) 
export default App
