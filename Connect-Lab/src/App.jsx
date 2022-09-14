import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { TelaLogin } from '../src/pages/TelaLogin'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TelaLogin />
      </div>
    </BrowserRouter>
  )
}

export default App