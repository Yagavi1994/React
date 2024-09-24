import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps name="Mike! " age="I see you're 32 years old, " greetings="nice to meet you!! " />
    </div>
  );
}

export default App;
