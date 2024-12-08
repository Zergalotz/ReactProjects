import './App.css';
import MessageDisplay from './Components/MessageDisplay.js'

const message = 'Hello World from React!';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MessageDisplay displayMessage={message}></MessageDisplay>
      </header>
    </div>
  );
}

export default App;
