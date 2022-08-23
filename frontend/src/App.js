import './App.css';

import WelbertBg from './resources/wellisonPerfil.jpg';

import WrapperSkills from './components/WrapperSkills';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#main-sobre" rel="Link Sobre">Sobre</a></li>
            <li><a href="#main-skills" rel="Link Linguagens">Skills</a></li>        
            <li><a href="#main-projetos" rel="Link Projetos">Projetos</a></li>
            <li><a href="#main-interesses" rel="Link Interesses">Interesses</a></li>
            <li><a href="#main-formacao" rel="Link Formação">Formação</a></li>           
            <li><a href="#main-contatos" rel="Link Contatos">Contatos</a></li>
          </ul>
        </nav>
        <div className="main-header--container">
          <div className="main-header--left">
            <div>
              <h1>Desenvolvedor</h1>
              <h1>Web2.0</h1>
              <h1>&lsaquo;FullStack/&rsaquo;</h1>
            </div>
          </div>
          <div className="main-header--right" style={{backgroundImage: `linear-gradient(to right, #b5b5b5 2%, transparent 25%), url(${WelbertBg})`}}>

          </div>
        </div>
      </header>
      <main>
        <section id="main-sobre--container">
          <div>
            <h1 className="main-title">&lsaquo;Sobre Mim/&rsaquo;</h1>
            <p>
              Desenvolvedor e entusiasta do mundo da programação e tecnologia, focado na web2.0 de ponta a ponta 
              com boa base na stack BackEnd e atualmente focado nas tecnologias FrontEnd, buscando experiência
              em projetos reais e/ou em produção, vivendo e estudando programação todos os dias de segunda a segunda a 2 anos,
              Obs: Trabalhando como freelancer nos dias atuais.
            </p>
            <ul>
              <li>Nacionalidade: Brasileira</li>
              <li>Idade: 22 Anos</li>
              <li>Endereço: Rua Grécia, 544 Jardim Celani Salto - SP</li>
              <li>CEP: 13326-130</li>
            </ul>
          </div>
        </section>
        <section id="main-skills--container">
            <div>
              <h1 className="main-title">&lsaquo;Skills/&rsaquo;</h1>
              <WrapperSkills />
            </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
