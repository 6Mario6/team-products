import React from "react";
import Header from "./components/organisms/Header/Header";
import Banner from "./components/organisms/Banner/Banner";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Edit from "./pages/Edit/Edit";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Banner />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products/create" component={Create}/>
          <Route exact path="/products/edit/:id" component={Edit}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
