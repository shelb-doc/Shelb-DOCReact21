import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./containers/Contact/Contact";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
