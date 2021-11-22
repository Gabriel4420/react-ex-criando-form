import { useState } from 'react'
import AreaInputs from './components/AreaInputs'
import './App.css'
const App = () => {
  const [name, setName] = useState('')
  const [undername, setUndername] = useState('')
  const [age, setAge] = useState(0)
  return (
    <>
      <h2>Exercicio: Construção de um Formulário</h2>
      <AreaInputs>
        <div className="inputs">
          <div className="name--input">
            Nome:
            <input
              className="genericinput"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="undername--input">
            Sobrenome:
            <input
              className="genericinput"
              type="text"
              onChange={(e) => setUndername(e.target.value)}
            />
          </div>

          <div className="age--input">
            Idade:
            <input
              className="genericinput"
              type="number"
              onChange={(e) => setAge(parseInt(e.target.value))}
            />
          </div>
        </div>

        <div className="resp">
          Olá {name} {undername}, tudo bem?
          <br />
          Você tem {age >= 0 ? age : 0} anos.
        </div>
      </AreaInputs>
    </>
  )
}

export default App
