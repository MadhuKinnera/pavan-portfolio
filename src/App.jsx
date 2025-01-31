import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-200 bg-white dark:bg-gray-900">
        <Navbar />
        <main>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;