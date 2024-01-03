import { useState } from "react";
import moment from "moment/moment";
import fetchWeather from "./weatherfetch";
import "./estyle.css"

function App() {
  const [query, setQuery] = useState("")
  const [weather, setWeather] = useState({})

  const change = (e) => {
    setQuery(e.target.value)
    console.log(e.target.value)
  }

  const search = async (e) => {
    if (e.code === "Enter") {
      let data = await fetchWeather(query)
      setWeather(data)
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className="box">
      <div className="card">
        <div className="card-head p-3" style={{ backgroundColor: "palevioletred" }}>
          <h3 className="fst-italic text-center mb-2">Weather Application</h3>
          <div className="row">
            <div className="col-10" width="100%">
              <input value={query} onKeyPress={search} onChange={change} type="text" className="form-control" placeholder="Enter Country/State/District Name....!" />
            </div>
            <div className="col">
              <button className="button" style={{ borderRadius: "20px" }} onClick={reload}><i class="fa-solid fa-arrows-rotate"></i></button>
            </div>
          </div>
        </div>
        {weather.main &&
          <div className="card-body" style={{ backgroundColor: "teal", color: "white", fontSize: "25px" }}>
            <div className="row border-bottom border-black">
              <div className="col border-end border-black">
                {moment().format('dddd')} , {moment().format('LL')}
              </div>
              <div className="col">
                <p className="button">Description : {weather.weather[0].description}</p>
              </div>
            </div>
            <div className="row border-bottom border-black">
              <div className="col border-end border-black">
                Temperature : {Math.round(weather.main.temp)} &deg;C
              </div>
              <div className="col">
                <p className="button">Humidity : {weather.main.humidity} %</p>
              </div>
            </div>
            <div className="row border-bottom border-black">
              <div className="col border-end border-black">
                Sunrise : {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
              </div>
              <div className="col">
                <p className="button">Sunset : {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
              </div><br />
            </div>
            <div className="row border-bottom border-black">
              <div className="col-6 border-end border-black">
                Country/State/District : {weather.name}
              </div>
              <div className="col">
                <p className="button">Icon :<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="icon" /></p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
    // </div>
  )
}
export default App;