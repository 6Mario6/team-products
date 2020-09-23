import React from "react";
import Header from "./components/organisms/Header/Header";
import Banner from "./components/organisms/Banner/Banner";
import Home from "./pages/Home/Home";
import Create from "./pages/Create/Create";
import Edit from "./pages/Edit/Edit";
import { HashRouter, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';
function App() {
  return (
    <HashRouter>
    <Provider store={store}>
      <Header></Header>
      <Banner />
      <div className="App">
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products/create" component={Create}/>
          <Route exact path="/products/edit/:id" component={Edit}/>
        </Switch>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
