import React from 'react';

import WelbertBg from '../resources/wellisonPerfil.jpg';

import './MainHeaderFeatured.css';

export default function MainHeaderFeatured() {
    const verificaSize = () => {
        if (window.screen.width > 700)
        {
            document.querySelector(".main-header--right")
                .style.backgroundImage = `linear-gradient(to right, #b5b5b5 5%, transparent 25%), url(${WelbertBg})`;
        }
        else 
        {
            document.querySelector(".main-header--right")
                .style.backgroundImage = `url(${WelbertBg})`;
        }
    }

    window.addEventListener("resize", verificaSize);
    return (
        <div className="main-header--container">
            <div className="main-header--left">
                <div>
                    <h1>Desenvolvedor</h1>
                    <h1>Web2.0</h1>
                    <h1>&lsaquo;FullStack/&rsaquo;</h1>
                </div>
          </div>
          <div className="main-header--right" style={window.screen.width > 700 ? { backgroundImage: `linear-gradient(to right, #b5b5b5 2%, transparent 25%), url(${WelbertBg})`}
          :{ backgroundImage: `linear-gradient(to right, #b5b5b5 .5%, transparent 25%), url(${WelbertBg})`}}></div>
        </div>
    )
};
