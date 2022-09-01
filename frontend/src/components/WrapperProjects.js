import React from 'react';

import './WrapperProjects.css';

import amazonAmostra from '../resources/amazona.jpg';
import netflixAmostra from '../resources/NetFlixCloneWeb.gif';

export default function WrapperProjects() {
    return (
        <section id="main-projects--container">
            <div>
                <h1 className="main-title">&lsaquo;Projetos&rsaquo;</h1>
                <hr />
                <div className="wrapper-projects">
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Clone Amazon ReactJs e Asp.NetCore</h3>
                                    <a href="https://github.com/welBert-dev/ecommerceWebApi-microServices-dotNetCoreMVC" target="_blank"><i className="fas fa-share-square"></i></a>
                                </div>
                                <p>Código do projeto clicando no botão a cima</p>
                                <span>WEB E2E</span>
                            </div>
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
                                        <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox</li>
                                        <li>ReactJs: Componentes, Props, Eventos, Hooks, Router, Axios</li>
                                        <li>Redux: Store, Reducers, Actions</li>
                                        <li>Dependência de desenvolvimento: ESLint</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="projects-subdescription--container">
                                <h3 class="projects-subtitle">Descrição</h3>
                                <p>
                                    Clone da amazon web utilizando as ferramentas a cima, resultado da junção de duas tecnologias distintas
                                    sendo elas o JavaScript Reactjs do Facebook no frontend e o C# Asp.NetCore da Microsoft no backend,
                                    com auxilio das bibliotecas mencionadas... projeto parcialmente concluído, ainda vai receber novas funcionalidades
                                    e o objetivo é chegar bem próximo do sistema original.
                                </p>
                            </div>
                        </div>
                        <img className="projects-logo" src={amazonAmostra} alt="Amostra Amazon" ></img>
                    </article>
                    <hr />
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Clone Netflix Reactjs consumindo API TMDB</h3>
                                    <a href="https://github.com/WelBert-dev/netflixCloneWeb-NoE2E-react" target="_blank"><i className="fas fa-share-square"></i></a>
                                </div>
                                <p>Código do projeto clicando no botão a cima</p>
                                <span>WEB NoE2E</span>
                            </div>
                            <ul className="projects-description--container">
                                <li>
                                    <h3 class="projects-subtitle">BackEnd</h3>
                                    <ul>
                                        <li>API do TMDB: https://api.themoviedb.org/3</li>
                                        <li>Lista de filmes categoria originais netflix: "/discover/tv?with_network=213"</li>
                                        <li>Lista de filmes Recomendados: "/trending/all/week"</li>
                                        <li>Lista de filmes Em Alta: "/movie/top_rated"</li>
                                        <li>Lista de filmes categoria Ação: "/discover/movie?with_genres=28"</li>
                                        <li>Lista de filmes categoria Comédia: "/discover/movie?with_genres=35" </li>
                                        <li>Lista de filmes categoria Terror: "/discover/movie?with_genres=27"</li>
                                        <li>Lista de filmes categoria Romance: "/discover/movie?with_genres=10749"</li>
                                        <li>Lista de filmes categoria Documentário: "/discover/movie?with_genres=99"</li>
                                        <li>Endpoint detalhes de um filme específico: "/movie/id:int"</li>
                                        <li>Endpoint detalhes de uma série específica: "/tv/id:int"</li>
                                        <li>Parametro para vir traduzido em pt-BR: "language=pt-BR"</li>
                                        <li>È necessário também passar a API KEY, para isto basta registrar na plataforma.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3 class="projects-subtitle">FrontEnd</h3>
                                    <ul className="projects-frontend--container">
                                        <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox</li>
                                        <li>ReactJs: Componentes, Props, Eventos, Hooks</li>
                                        <li>JavaScript Vanila: Evento scroll</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="projects-subdescription--container">
                                <h3 class="projects-subtitle">Descrição</h3>
                                <p>
                                    Clone da interface netflix web utilizando as ferramentas a cima, projeto teoricamente simples porém cheio de detalhes
                                    feito quando eu estava começando a estudar Reactjs com apoio do Bonieky do canal B7Web, foi quando eu me interessei 
                                    pelo ReactJs pois vi o seu potêncial e achei bem interessante, não é atoa que o facebook criador utiliza nos projetos,
                                    ótima ferramenta que me fez me interessar bastante pelo FrontEnd, pois até então eu estudava a stack porém, meu forte 
                                    sempre foi mais as tecnologias BackEnd, foi ai que eu decidi me tornar FullStack... lógico que é uma escolha bem ousada,
                                    mas acredito que com esforço e dedicação eu consigo cumprir essa meta! "Um leão por dia".
                                </p>
                            </div>
                        </div>
                        <img className="projects-logo" src={netflixAmostra} alt="Amostra Netflix" ></img>
                    </article>
                    <hr />
                    <article className="projects-single">
                        <div className="projects-right">
                            <div className="projects-title--container">
                                <div>
                                    <h3 className="projects-title">Interface Clínica AuauMiau sem frameworks (Frontend) Vanilla</h3>
                                    <a href="https://github.com/WelBert-dev/auauMiauWeb-NoFramework" target="_blank"><i className="fas fa-share-square"></i></a>
                                </div>
                                <p>Código do projeto clicando no botão a cima</p>
                                <span>WEB NoE2E (HTML5 + CSS3 + Js PURO)</span>
                            </div>
                            <ul className="projects-description--container">
                                <li>
                                    <h3 class="projects-subtitle">BackEnd ("Back do front")</h3>
                                    <ul>
                                        <li>Persistência de dados utilizando Local Storage</li>
                                        <li>Utilizando Js puro, para percorrer e criar elementos HTML</li>
                                        <li>Utilizei a abordagem de POO com Js para criar as Entidades e persistir dados</li>
                                        <li>Conversões de Entidades para Json ao armazenar e retornar dados</li>
                                        <li>Resumo: CRUD Client-Side</li>
                                        <li>Trabalho do curso!</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3 class="projects-subtitle">FrontEnd</h3>
                                    <ul className="projects-frontend--container">
                                        <li>HTML5 e CSS3: Elementos semânticos, CSS Grid, Flexbox</li>
                                        <li>Animações CSS: Sucesso e Erro ao registrar clientes</li>
                                        <li>Componentização, para ja ir acostumando com ReactJS</li>
                                        <li>Herança de classes, utilizado a mesma classe em vários comps "iguais"</li>
                                        <li>Js Vanilla</li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="projects-subdescription--container">
                                <h3 class="projects-subtitle">Descrição</h3>
                                <p>
                                    Trabalho do curso, aonde foi realizado um parsing do semestre anterior, o projeto 
                                    foi desenvolvido inicialmente em windows forms com .NetCore (C#) da Microsoft,
                                    a lógica/documentação continuaram as mesmas porém desta vez mudando a camada de 
                                    apresentação para a web. Projeto "Puro" sem nenhum framework, utilizando a persistencia
                                    de dados "client-side" do navegador (LocalStorage).
                                    Abordagem escolhida pois muitas das vezes é mais interessante utilizar este recurso 
                                    (desde que não exagere), pois o armazenamento não se perde com Re-Loads e nem possuem tempo
                                    de expiração (diferente de coockies).
                                    Foi ótimo para treinar e aprender conceitos que muitos dos frameworks abstraem e acaba passando
                                    despercebido, então foi possível "olhar por de baixo dos panos", colocando a mão no código.
                                </p>
                            </div>
                        </div>
                        <img className="projects-logo" src={amazonAmostra} alt="Amostra AuauMiau NoFamework" ></img>
                    </article>
                    <hr />
                </div>
            </div>
        </section>
    )
};
