import React from 'react';
import {IoLocationSharp} from "react-icons/io5";
import {IoPartlySunnyOutline} from "react-icons/io5";

const WeatherOfDay = ({data}) => {
    return (
        <div className={"bg-[#63B3ED] w-[500px] h-[400px] rounded-lg p-2"}>
            <div className={"flex flex-col pl-7 pt-7  pb-7"}>
                <div className={" gap-y-1 "}>
                    <h1 className={"font-bold text-4xl text-white  "}>Tuesday</h1>
                    <h2 className={" text-white"}>15 jan 19</h2>
                    <h3 className={"flex items-center  text-blue-100"}><IoLocationSharp/> {data.name}</h3>
                </div>
                <div className={"pt-20 gap-y-1 text-white"}>
                    <h1 className={" text-7xl"}><IoPartlySunnyOutline/></h1>
                    <div className={"text-6xl font-bold"}>
                        {data.main ? <h1>{data.main.temp.toFixed()} ºF</h1> : null}
                    </div>
                    <div className={"font-bold text-2xl"}>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeatherOfDay;