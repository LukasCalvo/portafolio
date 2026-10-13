import './App.css';
import CustomNavbar from './components/CustomNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import News from './components/News';

function App() {
  return (
    <div className="bg-black min-vh-100">
      <CustomNavbar />
      <About />
      <Projects />
      <News />
      <Contact />
    </div>
  );
}

export default App;