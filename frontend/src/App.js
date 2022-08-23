import './App.css';
import WelbertBg from './resources/wellisonPerfil.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#main-sobre" rel="Link Sobre">Sobre</a></li>
            <li><a href="#main-contatos" rel="Link Contatos">Contatos</a></li>
            <li><a href="#main-so" rel="Link S.O's">S.O</a></li>
            <li><a href="#main-linguagens" rel="Link Linguagens">Linguagens</a></li>
            <li><a href="#main-frameworks" rel="Link Frameworks">Fremeworks</a></li>
            <li><a href="#main-formacao" rel="Link Formação">Formação</a></li>
            <li><a href="#main-interesses" rel="Link Interesses">Interesses</a></li>
            <li><a href="#main-projetos" rel="Link Projetos">Projetos</a></li>
          </ul>
        </nav>
        <div class="main-header--container">
          <div class="main-header--left">
            <div>
              <h1>Desenvolvedor</h1>
              <h1>Web2.0</h1>
              <h1>FullStack</h1>
            </div>
          </div>
          <div class="main-header--right" style={{backgroundImage: `linear-gradient(to right, #b5b5b5 2%, transparent 25%), url(${WelbertBg})`}}>

          </div>
        </div>
      </header>
      <main>
        <section id="main-sobre--container">
          <div>

          </div>
          <div>

          </div>
        </section>
        <section>

        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
