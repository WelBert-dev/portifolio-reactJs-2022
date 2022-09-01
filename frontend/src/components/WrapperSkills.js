import React from 'react';

import './WrapperSkills.css';

export default function WrapperSkills() {
    return (
        <section id="main-skills--container">
            <div>
                <h1 className="main-title">&lsaquo;Skills&rsaquo;</h1>
                <div className="wrapper-skills">
                    <article className="skill-tec">
                        <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" alt="Logo do JavaScript" ></img>
                        <div className="right">
                            <h3 className="title-skill">JavaScript ESC8</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" alt="Logo do HTML5" ></img>
                        <div className="right">
                            <h3 className="title-skill">HTML5 Semântico</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://logodownload.org/wp-content/uploads/2017/04/css-3-logo.png" alt="Logo do CSS3" ></img>
                        <div className="right">
                            <h3 className="title-skill">CSS3</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://gitlab.com/uploads/-/system/project/avatar/14519101/react-256.png" alt="Logo do ReacJs" ></img>
                        <div className="right">
                            <h3 className="title-skill">ReactJs</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://cdn.cdnlogo.com/logos/c/27/c.svg" alt="Logo do C#" ></img>
                        <div className="right">
                            <h3 className="title-skill">C#</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://miro.medium.com/max/300/1*oPEDLkxFxRbrzSBvDSt72g.png" alt="Logo do AspNetCore" ></img>
                        <div className="right">
                            <h3 className="title-skill">Asp.NetCore</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/mysql-3628940-3030165.png" alt="Logo do MySQL" ></img>
                        <div className="right">
                            <h3 className="title-skill">MySQL</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png" alt="Logo do Python" ></img>
                        <div className="right">
                            <h3 className="title-skill">Python</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                    <article className="skill-tec">
                        <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gnulinux.svg/1200px-Gnulinux.svg.png" alt="Logo do GNU/Linux" ></img>
                        <div className="right">
                            <h3 className="title-skill">GNU/Linux</h3>
                            <progress className="progress-bar" max="100" value="70">70%</progress>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
};
