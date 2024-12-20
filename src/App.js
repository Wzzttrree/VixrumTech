import { Header } from './components/Header';
import './App.css';
import { Welcome } from './components/Welcome';
import { Abilities } from './components/abilities';

function App() {
  return (
    <div className="App">
        <Header />
        <Welcome/>
        <Abilities/>
    </div>
  );
}

export default App;
