import React from 'react';

import './WrapperProjects.css';

import amazonAmostra from '../resources/amazona.jpg';

export default function WrapperProjects() {
    return (
        <div className="wrapper-projects">
            <article className="projects-single">
                <img className="projects-logo" src={amazonAmostra} alt="Amostra Amazon" ></img>
                <div className="projects-right">
                    <h3 className="projects-title">Clone da Amazon com ReactJs e Asp.NetCore</h3>
                    <ul className="projects-description--container">
                        <li>
                            <h3 class="projects-subtitle">BackEnd</h3>
                            <ul>
                                <li>C#: Asp.NetCoreMVC</li>
                                <li>API Mircroservices</li>
                                <li>80% REST</li>
                                <li>Arquitetura de diretórios: MVC</li>
                                <li>EntityframeworkCore: Framework para abstrair a persistência de Dados</li>
                                <li>Migrations: Lib para manter o banco de dados e a aplicação atualizados/conectados</li>
                                <li>AutoMap: Lib para fazer mapeamento/Parsing DTO &lsaquo;=&rsaquo; Entidade/Model</li>
                                <li>Persistência de dados: MySQL</li>
                            </ul>
                        </li>
                        <li>
                            <h3 class="projects-subtitle">FrontEnd</h3>
                            <ul className="projects-frontend--container">
                                <li>FrontEnd</li>
                                <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox</li>
                                <li>ReactJs: Componentes, Props, Eventos, Hooks, Router, Axios</li>
                                <li>Redux: Store, Reducers, Actions</li>
                                <li>Dependência de desenvolvimento: ESLint</li>
                             </ul>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    )
};
