import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Proposals from "./pages/Proposals"
import Form from "./pages/Form"
import { OmegaClientProvider } from "./context/OmegaClientContext"

function App() {
  return (
    <BrowserRouter>
      <OmegaClientProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/propostas" component={Proposals} />
          <Route exact path="/formulario" component={Form} />
        </Switch>
      </OmegaClientProvider>
    </BrowserRouter>
  )
}

export default App
