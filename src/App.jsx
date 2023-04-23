import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome";
import UsersList from "./components/UsersList";

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/users" component={UsersList} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;