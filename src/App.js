import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Graph } from './components/Graph';
import { Cap } from './components/Cap';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main />
      <Graph />
      <Cap />
      <Footer />
    </div>
  );
}

export default App;
