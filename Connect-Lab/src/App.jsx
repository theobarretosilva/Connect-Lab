import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { BoxLogin } from './components/BoxLogin/BoxLogin'
import { Header } from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <BoxLogin />
      </div>
    </BrowserRouter>
  )
}

export default App