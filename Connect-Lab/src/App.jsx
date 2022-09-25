import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import "./assets/css/App.css"
import { history } from "./router/history";

function App() {
  return (
    <BrowserRouter history={history}>
      <Router />
    </BrowserRouter>
  )
}

export default App