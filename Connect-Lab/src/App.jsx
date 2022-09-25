import { Router } from "./router/Router";
import "./assets/css/App.css";
import { BrowserRouter } from "react-router-dom";
import { history } from "./router/history";

function App() {
  return (
    <BrowserRouter history={history}>
      <Router />
    </BrowserRouter>
  );
};

export default App;