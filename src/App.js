import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import Authentication from "./components/Authentication";
import PostPage from "./components/PostPage";
import { Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Services from "./pages/services";
import Contact from "./pages/contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Authentication />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/:id" component={PostPage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
