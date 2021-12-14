import { useEffect, useState } from "react";
import "./App.css";
import Posts from "./pages/Posts/Posts";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PostChild from "./pages/Posts/PostChild/PostChild";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/" to="/posts" exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/:id" component={PostChild} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
