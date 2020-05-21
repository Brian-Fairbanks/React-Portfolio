import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Index from "./pages/index.js";
import Error from "./pages/errorPage.js";
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header>
          <Nav />
        </Header>
        <Switch>
        <Route exact path={["/","/index", "/React-Portfolio"]}>
            <Index/>
          </Route>
          <Route exact path={["/portfolio"]}>
            <Portfolio/>
          </Route>
          <Route exact path={["/contact"]}>
            <Contact />
          </Route>
          <Route>
            <Error/>
          </Route>
        </Switch>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
