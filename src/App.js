import React from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./MenuComponent";
function App() {
  return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristornate Con Fusion</NavbarBrand>
          </div>
        </Navbar>
          <Menu/>
      </div>
  );
}

export default App;
