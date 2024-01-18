import './App.css';
import Counter from "./components/Counter"
import Header from "./components/Header"
import { CounterProvider } from "./CounterContext"

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Header></Header>
        <Counter></Counter>
      </CounterProvider>
    </div>
  );
}

export default App;
