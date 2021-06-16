import React,{useEffect, useState} from 'react'
import './App.css';
import 'tachyons'


function App() {
    var api={
      key:"4dd4958a97c8f01faf5b64a07c1ee485",
      base:"https://api.openweathermap.org/data/2.5/"
    }

    useEffect(()=>{
      todayClimate('Nagercoil')
    },[]);

  const datebuilder=(d)=>{
    let months =["January","Febraury","March","April","May","June","July","August","September","October","November","December"]
    let days=["Sunday","Monday","Tuesday","Wednesday","Thurshday","Friday","Saturday"]

    var day=days[d.getDay()]
    var month=months[d.getMonth()]
    var date=d.getDate()
    var year=d.getFullYear()

    return(`${day},${date} ${month} ${year}`)
  }

  const[input,setInput]=useState("")
  const[weather,setWeather]=useState({})

  const todayClimate=(place)=>{
        fetch(`${api.base}weather?q=${place}&units=metric&appid=${api.key}`)
        .then(res=>res.json())
        .then(data=>{
          setWeather(data)
        })
      setInput("")

      
  }
  const onTextChange=(event)=>{
    event.preventDefault()
      setInput(event.target.value)
  }

    return (
      <div>
        { weather.main !== undefined ?
        <div className={weather.main.temp < 20 ? "appcold":"appwarm"}>
            <div className="searchBox tc ">
             <input 
              value={input}
                 type="text"
                 placeholder="Search..."
                 className="Search"
                onChange={onTextChange}
                />
              
              <button  onClick={()=>todayClimate(input)}>
                Find
              </button>
            </div>  

            <div className="place tc">
              <p >{weather.name},{weather.sys.country}</p>
            </div>

            <div className=" tc">
              <p className="date">{datebuilder(new Date())}</p>
            </div>

            <div className="temperature tc">
              <p className="tempr">{
               weather.main.temp 
              } &deg;C</p>
            </div>
          
            <div className="climate tc">
              <p>{
               (weather.main.temp < 20 ?"Cloudy":"Sunny")
               }</p>
            </div>
              
            <div className="footer">
              <p>© 2021 - Developed by Arun Dhas</p>
            </div>

        </div> : 
            <div>
              <p className=" tc f2 ">city not found</p>
            </div> 
        }

      </div>
      );
}

export default App;
