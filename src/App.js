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

    var day=days[d.getDay()]
    var month=months[d.getMonth()]
    var date=d.getDate()
    var year=d.getFullYear()

    return(`${day},${date} ${month} ${year}`)
  }

  const[input,setInput]=useState("texas")
  const[weather,setWeather]=useState({})

  const todayClimate=async ()=>{
    //console.log(input)
        await fetch(`${api.base}weather?q=${input}&units=metric&appid=${api.key}`)
        .then(res=>res.json())
        .then(data=>{
          setWeather(data)
          console.log(weather)
      })
        
  }
  const onTextChange=(event)=>{
      setInput(event.target.value)
  }

    return (
        <div className="app">
            <div className="searchBox tc ">
              <input 
                 type="text"
                 placeholder="Search..."
                 className="Search"
                onChange={onTextChange}
                />
              
              <button onClick={todayClimate}>
                Find
              </button>
            </div>  

            <div className="place tc">
              TamilNadu
            </div>

            <div className="date tc">
              {datebuilder(new Date())}
            </div>

            <div className="temperature tc">
              <p>15&#8451;</p>
            </div>

            <div className="climate tc">
              Cloudy
            </div>
        </div>
      );
}

export default App;
