import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import todoPage from "./pages/todopage/todopage.component";
import donePage from "./pages/donepage/donepage.component";
function App() {
  return (
    <Switch>
      <Route path="/" exact component={todoPage} />
      <Route path="/done" exact component={donePage} />
    </Switch>
  );
}

export default App;
