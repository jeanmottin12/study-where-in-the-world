import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./pages/Home";
import { Country } from "./pages/Country";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/country/:code">
          <Country />
        </Route>
      </Switch>
    </Router>
  )
}
