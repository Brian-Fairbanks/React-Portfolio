import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Index from "./pages/index.js";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header>
          <Nav />
        </Header>
        <Switch>
        <Route exact path={["/","/index"]}>
            <Index/>
          </Route>
          <Route exact path={["/portfolio"]}>
            <Index/>
          </Route>
          <Route exact path={["/contact"]}>
            <Index/>
          </Route>
          <Route>
            <Index/>
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
