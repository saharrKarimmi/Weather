import React, {useState} from "react";
import WeatherOfDay from "./components/WeatherOfDay";
import Temperaments from "./components/Temperaments";
import axios from "axios";

const App = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=d0c4e781dd2246769e15e8d0b5739e8a`
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }

    }
    return (
        <div>
            <div className={"text-center mt-5 p-1"}>
                <input className={"p-2 bg-gray-200  text-xl rounded-xl border-s-blue-400"} type={"text"}
                       value={location} onChange={e => setLocation(e.target.value)}
                       placeholder={"Enter Location..."} onKeyPress={searchLocation}/>
            </div>
            <div className=" flex justify-center items-center w-full h-[100vh] ">

                <WeatherOfDay data={data}/>
                <Temperaments data={data}/>
            </div>
        </div>)

}

export default App;
