
import './App.css';
import ClassClick from './Components/ClassClick';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import { Greet } from './Components/Greet';
import GreetParent from './Components/GreetParent';
import Message from './Components/Message';
import UserGreet from './Components/UserGreet';

function App() {
  return (
    <div className="App">
      {/* <Message/>
      <Greet/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <GreetParent/> */}
      <UserGreet/>
    </div>
  );
}

export default App;
