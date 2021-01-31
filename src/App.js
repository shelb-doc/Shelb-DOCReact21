import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const styles = {
  backgroundImage: "url('https://wallpapercave.com/wp/wp3408013.jpg')",
  alignItems: "center",
};

function App() {
  return (
    <div className="App" style={styles}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
