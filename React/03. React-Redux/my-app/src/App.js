import './App.css';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import counterReducer from './reducers/counterReducer'

function App() {
  const allReducers = combineReducers({ counter: counterReducer })
  const store = createStore(allReducers)

  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
