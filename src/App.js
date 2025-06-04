import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Skills from './components/Skill';

function App() {
  return (
    <>
      <Navbar />
      <Welcome/>
      <About/>
      <Skills/>
    </>
  );
}

export default App;
