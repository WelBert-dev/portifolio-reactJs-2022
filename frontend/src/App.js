import './App.css';

import MainNavbar from './components/MainNavbar';
import WrapperSkills from './components/WrapperSkills';
import WrapperProjects from './components/WrapperProjects';
import MainHeaderFeatured from './components/MainHeaderFeatured';
import WrapperAboutMe from './components/WrapperAboutMe';


function App() {
  return (
    <div className="App">
      <header>
        <MainNavbar />
        <MainHeaderFeatured />
      </header>
      <main>
        <WrapperAboutMe />
        <section id="main-skills--container">
            <div>
              <h1 className="main-title">&lsaquo;Skills/&rsaquo;</h1>
              <WrapperSkills />
            </div>
        </section>
        <section id="main-projects--container">
            <div>
            <h1 className="main-title">&lsaquo;Projetos/&rsaquo;</h1>
              <WrapperProjects/>
            </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
