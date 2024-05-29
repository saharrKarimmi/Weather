import React from 'react';
import {LuSun} from "react-icons/lu";
import {MdCloudQueue} from "react-icons/md";
import WeatherCard from "./cards/WeatherCard";
import Card from "./cards/Card";

const Temperaments = ({data}) => {


    console.log("is1", data)
    return (

        <div className={"bg-[#2D3748] w-[500px] rounded-r-lg h-96"}>
            {data.name != undefined &&
                <div className={"flex flex-col p-9"}>
                    <div className={""}>
                        <h2 className={"text-lg pt-4 flex justify-between text-white"}>
                            <p className={"font-bold "}>PRECIPITATION</p>
                            {data.main ? <p> {data.main.feels_like.toFixed()}</p> : null}
                        </h2>
                        <h2 className={" text-lg flex pt-4 justify-between text-white"}>
                            <p className={"font-bold "}>HUMIDITY</p>
                            <div> {data.main ? <p> {data.main.humidity.toFixed()}%</p> : null}</div>
                        </h2>
                        <h2 className={" text-lg flex pt-4 justify-between text-white"}>
                            <p className={"font-bold "}>WIND</p>
                            {data.wind ? <p> {data.wind.speed.toFixed()}MPH</p> : null}
                        </h2>
                    </div>
                    <Card/>
                </div>
            }
        </div>

    );
};

export default Temperaments;