import React, { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './MainNavbar.css';

export default function MainNavbar() {

    const navRef = useRef();

    const showNavbar = () => {
        
        if (navRef.current.classList.toggle("responsive_nav"))
        { // responsivo ativo e botao precionado
            document.getElementById("btn-hamburguer").style.display = 'none';
            document.getElementById("btn-hamburguer").style.position = 'relative';
            navRef.current.classList.toggle("responsive_nav-opacityUm");
            
        }else 
        {
            document.getElementById("btn-hamburguer").style.display = 'block';
            document.getElementById("btn-hamburguer").style.position = 'fixed';
            navRef.current.classList.toggle("responsive_nav-opacityZero");
            console.log("else");
        }
    };

    return (
        <>
            <nav ref={navRef}>
                <button id="nav-close-btn" className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes /></button>
                <a href="#main-sobre">Sobre</a>
                <a href="#main-skills" rel="Link Linguagens">Skills</a>     
                <a href="#main-projetos" rel="Link Projetos">Projetos</a>
                <a href="#main-interesses" rel="Link Interesses">Interesses</a>
                <a href="#main-formacao" rel="Link Formação">Formação</a>        
                <a href="#main-contatos" rel="Link Contatos">Contatos</a>
            </nav>
            <button id="btn-hamburguer" className="nav-btn" onClick={showNavbar}><FaBars /></button>
        </>
        

    )
};
