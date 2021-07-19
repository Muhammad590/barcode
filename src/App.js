
import './App.css';
import Signup from "./components/Signup"
import login from "./components/login"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (

<>
<Router>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/login" component={login} />
    </Switch>

</Router>

</>
  );
}

export default App;
