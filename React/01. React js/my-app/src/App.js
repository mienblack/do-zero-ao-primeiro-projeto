import Header from './Header'
import Counter from './Counter'
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [show, setShow] = useState(true)
  let time = 0

  useEffect(() => {
    let timer = setInterval(() => {
      time++
      console.log(time)
      if (time > 5) {
        clearInterval(timer)
        setShow(false)
      }
    }, 1000)
  }, [])

  if (show) {
    return (
      <div>
        <Header name='React Page' links={["Sobre", "Compras", "Contato", "Redes"]}></Header>
        <Counter count={0}></Counter>
      </div>

    )
  } else {
    return (
      <div>
        <Header name='React Page' links={["Sobre", "Compras", "Contato", "Redes"]}></Header>
        No Counter Here
      </div>

    )
  }
}

export default App;
