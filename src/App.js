import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const screenSize = window.innerWidth;
      console.log(window.innerWidth);
      const desktopSize = 700;
      const tabletSize = 500;
      const mobileSize = 300;
      if (screenSize > desktopSize) {
          {
              return <div >
                  Desktop!
              </div>
          }
      } else if (screenSize < desktopSize && screenSize > tabletSize) {
          {
              return <div >
                  Tablet View!
              </div>
          }
      } else {
          {
              return <div >
                  Mobile View!
              </div>
          }
      }
      return <div >
          Test View!
      </div>
  }
}

export default App;
