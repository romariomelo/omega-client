import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Proposals from "./pages/Proposals"
import NotFound from "./pages/NotFound"
import FormRegistrationProposal from "./pages/FormRegistrationProposal"
import { OmegaClientProvider } from "./context/OmegaClientContext"

function App() {
  return (
    <BrowserRouter>
      <OmegaClientProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/propostas" component={Proposals} />
          <Route
            exact
            path="/criar-proposta"
            component={FormRegistrationProposal}
          />
          <Route component={NotFound} />
        </Switch>
      </OmegaClientProvider>
    </BrowserRouter>
  )
}

export default App
