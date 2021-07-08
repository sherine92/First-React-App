import { Component } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Protofilo from "./components/Protofilo/Protofilo";
import { Route, Switch, Redirect } from "react-router-dom"
import Notfound from "./components/Notfound/Notfound";
class App extends Component {
  render() {
    return <>


      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/prot" component={Protofilo} />
        <Route path="/contact" component={Contact} />
        <Redirect exact from="/" to="/home" />
        <Route path="*" component={Notfound} />
      </Switch>

      <Footer />

    </>
  }
}

export default App
