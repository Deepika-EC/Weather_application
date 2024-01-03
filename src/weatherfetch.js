import axios from "axios"

let APP_KEY="984d931e6dc326caa8b542f532f90f30"
let URL="https://api.openweathermap.org/data/2.5/weather"

const fetchWeather=async(query)=>{
    let {data}=await axios.get(URL,{
        params:{
            q:query,
            APPID:APP_KEY,
            units:"metric"
        }
    })
    return data
    console.log(data)
}
export default fetchWeather;