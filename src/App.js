import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Proposals from "./pages/Proposals"
<<<<<<< HEAD
import NotFound from "./pages/NotFound"
=======
>>>>>>> 884d289bca717ea6d53b4e7f91c6ef04ad107e09
import Form from "./pages/Form"
import { OmegaClientProvider } from "./context/OmegaClientContext"

function App() {
  return (
    <BrowserRouter>
      <OmegaClientProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/propostas" component={Proposals} />
<<<<<<< HEAD
          <Route exact path="criar-proposta" component={Form} />
          <Route component={NotFound} />
=======
          <Route exact path="/formulario" component={Form} />
>>>>>>> 884d289bca717ea6d53b4e7f91c6ef04ad107e09
        </Switch>
      </OmegaClientProvider>
    </BrowserRouter>
  )
}

export default App
