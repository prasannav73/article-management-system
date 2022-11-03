import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListArticalComponent from "./components/ListArticalComponent";
import HeaderComponent from "./components/HeaderComponent";
import CreateArticalComponent from "./components/CreateArticalComponent";
import ViewArticalComponent from "./components/ViewArticalComponent";
import Auth from "./components/Auth";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Auth}></Route>
            <Route path="/articals" component={ListArticalComponent}></Route>
            <Route
              path="/add-artical/:id"
              component={CreateArticalComponent}
            ></Route>
            <Route
              path="/view-artical/:id"
              component={ViewArticalComponent}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
