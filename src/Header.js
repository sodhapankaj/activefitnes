import React, { Component } from 'react';
import './App.css';
import logo from './logo.jpg';
import './bootstrap.css'

class Header extends Component {
  render() {
    return (
      <div >
        <header className="App-header">
        <center>
          <img src={logo} className="App-logo" alt="logo" />
          </center>
        </header>

        <div className="container-fluid navbar1">
      
        <center>
      
              <div className="header1">
              <div className="line1">&nbsp;</div>
                   <li>Clients</li>
                   <div className="line2">&nbsp;</div>
                   <li>Add Client</li>
                   <div className="line2">&nbsp;</div>
                   <li>Class Attendances</li>
                   <div className="line2">&nbsp;</div>
                   <li>Statistics</li>
                   <div className="line2">&nbsp;</div>
                   <li>Log Out</li>
                   <div className="line1">&nbsp;</div>
                </div>
                </center>
          </div>

      </div>
    );
  }
}

export default Header;
