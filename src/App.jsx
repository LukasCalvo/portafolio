import './App.css';
import CustomNavbar from './components/CustomNavbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-vh-100">
      <CustomNavbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;