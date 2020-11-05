import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainHeader from "./components/navbar/MainHeader";
import SubHeader from "./components/navbar//SubHeader";
import Header from "./components/navbar//Header";
import Women from "./components/categories/Women";
import Checkout from "./components/checkout/Checkout";
import Men from "./components/categories/Men";
import Children from "./components/categories/Children";
import Search from "./components/search/Search";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <MainHeader />
            <SubHeader />
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <MainHeader />
            <SubHeader />
            <Header />
            <Login />
          </Route>
          <Route path="/women">
            <MainHeader />
            <SubHeader />
            <Header />
            <Women />
          </Route>
          <Route path="/men">
            <MainHeader />
            <SubHeader />
            <Header />
            <Men />
          </Route>
          <Route path="/children">
            <MainHeader />
            <SubHeader />
            <Header />
            <Children />
          </Route>

          <Route path="/wishinglist">
            <h1>Wishing List Page</h1>
          </Route>

          <Route path="/search">
            <MainHeader />
            <SubHeader />
            <Header />
            <Search />
          </Route>

          <Route path="/">
            <MainHeader />
            <SubHeader />
            <Header />
            <Women />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
