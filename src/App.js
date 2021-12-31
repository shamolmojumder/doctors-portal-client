import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard/>
        </Route>
        <Route path="/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
