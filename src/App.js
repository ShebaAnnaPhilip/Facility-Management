import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddFacility from "./containers/AddFacility";
import Dashboard from "./containers/Dashboard";
import Facilities from "./containers/Facilities";
import Header from "./containers/Header";
import Home from "./containers/Home";
import IdleTimer from 'react-idle-timer'

function App() {
  // const idleTimerRef = useRef(null)
  const onIdle = () =>{
   alert('Your Session will expire soon')
}
  return (
    <Router>
      <div className="App">
          <IdleTimer  timeout={3 *60 * 1000} onIdle={onIdle}></IdleTimer>
        <Switch>
          <Route path="/dashboard">
            <Header/>
            <Dashboard />
          </Route>
          <Route path="/facilities">
            <Header/>
            <Facilities />
          </Route>
          <Route path="/addfacilities">
            <Header/>
            <AddFacility />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
