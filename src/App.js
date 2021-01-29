import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
