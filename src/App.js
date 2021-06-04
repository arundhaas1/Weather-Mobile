import React,{useState} from 'react'
import './App.css';
import 'tachyons'


function App() {
    var api={
      key:"4dd4958a97c8f01faf5b64a07c1ee485",
      base:"https://api.openweathermap.org/data/2.5/"
    }

  const datebuilder=(d)=>{
    let months =["January","Febraury","March","April","May","June","July","August","September","October","November","December"]
    let days=["Sunday","Monday","Tuesday","Wednesday","Thurshday","Friday","Saturday"]

    let day=days[d.getDay()]
    let month=months[d.getMonth()]
    let date=d.getDate()
    let year=d.getFullYear()

    return(`${day} ${date} ${month} ${year}`)
  }

  const[query,setQuery]=useState("")
  const[Weather,setWeather]=useState("")

  const weathering=(event)=>{
    if (event.key==="Enter") {
        fetch(`${api.base}weather?q=${query}&appid=${api.key}`)
        .then(res=>res.json())
        .then(data=>setWeather(data))
        
        
    }
  }
    return (
        <div className="app">
            <div className="searchBox tc ">
              <input  onChange={e=>setQuery(e.target.value)} value={query} onKeyPress={weathering} type="text" placeholder="Search..." className="Search" />
            </div>          
            <div className="place tc">
              TamilNadu
            </div>
            <div className="date tc">
              {datebuilder(new Date())}
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
