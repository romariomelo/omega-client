import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Proposals from "./pages/Proposals"
import { OmegaClientProvider } from "./context/OmegaClientContext"

function App() {
  return (
    <BrowserRouter>
      <OmegaClientProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/propostas" component={Proposals} />
        </Switch>
      </OmegaClientProvider>
    </BrowserRouter>
  )
}

export default App
