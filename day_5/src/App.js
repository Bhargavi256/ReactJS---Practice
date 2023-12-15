import Greet from './Components/Greet';
import './App.css';
import Welcom from './Components/Welcom';
import { Hello } from './Components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Bharath" />
      <Welcom heroName="Prabhas" />
      <Hello/>
    </div>
  );
}

export default App;
