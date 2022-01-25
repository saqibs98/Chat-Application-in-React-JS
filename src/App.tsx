import Login from "./pages/login/Login";
import Messenger from "./pages/messenger/Messenger";
import Logout from "./pages/logout/logout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Messenger /> : <Login />}
        </Route>
        <Route path="/messenger">
          {user ? <Redirect to="/messenger" /> : <Login />}
          <Messenger />
        </Route>
        <Route path="/logout">{user && <Logout />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
