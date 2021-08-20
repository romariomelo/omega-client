import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import { OmegaClientProvider } from "./context/OmegaClientContext"

function App() {
  return (
    <BrowserRouter>
      <OmegaClientProvider>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </OmegaClientProvider>
    </BrowserRouter>
  )
}

export default App
