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
        <WrapperSkills />
        <WrapperProjects />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
