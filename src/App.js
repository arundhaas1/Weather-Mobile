import React from 'react'
import './App.css';
import 'tachyons'


function App() {
  return (
    <div className="app">
        <div className="searchBox tc ">
          <input type="text" placeholder="Search..." className="Search" />
        </div>          
        <div className="place tc">
           TamilNadu
        </div>
        <div className="date tc">
          28th March
        </div>
        <div className="temperature tc">
          15&#8451;
        </div>
        <div className="climate tc">
          Cloudy
        </div>
    </div>
  );
}

export default App;
