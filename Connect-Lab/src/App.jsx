import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { TelaCadastro } from '../src/pages/TelaCadastro'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TelaCadastro />
      </div>
    </BrowserRouter>
  )
}

export default App