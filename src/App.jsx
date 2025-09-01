import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <Header />
      {/* <About /> */}
      <div className="bg-wrapped">
        <About />
        <Projects/>
        <Skills/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
