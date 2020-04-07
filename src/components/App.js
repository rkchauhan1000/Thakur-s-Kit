import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-white flex-md-nowrap p-0 shadow">
          
           <b> Ritik Chauhan</b>
          
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                
                  <img src={logo} className="App-logo" alt="logo" />
                
                <h1>Start Developing here !!</h1>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
