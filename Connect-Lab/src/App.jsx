import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { AutenticacaoProvider } from "./contexts";
import "./assets/css/App.css"
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <BrowserRouter history={history}>
      <AutenticacaoProvider>
        <Router />
      </AutenticacaoProvider>
    </BrowserRouter>
  )
}

export default App