
import './App.css';
import Signup from "./components/Signup"
import login from "./components/login"
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  axios.defaults.baseURL = "http://localhost:4000/api/"
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
