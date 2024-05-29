import React from 'react';
import {LuSun} from "react-icons/lu";
import {MdCloudQueue} from "react-icons/md";

const Card = () => {
    return (
        <div>
            <div className={"pt-8 flex"}>
                {/*{data.map((item, index) => (*/}
                {/*    <WeatherCard key={index} data={item} propes={item.weather} />*/}
                {/*))}*/}
                <div
                    className={"bg-[#1A202C] hover:bg-white cursor-pointer w-28 h-36 rounded-xl text-white hover:text-black  flex justify-center items-center  flex-col"}>
                    <p className={"text-4xl"}><LuSun/></p>
                    <p>Tue</p>
                    <p className={"text-xl font-bold"}>30ºC</p>
                </div>
                <div
                    className={"bg-[#1A202C] w-28 h-36 hover:bg-white cursor-pointer  rounded-xl flex hover:text-black justify-center items-center  flex-col text-white"}>
                    <p className={"text-4xl"}><MdCloudQueue/></p>
                    <p>Wed</p>
                    <p className={"text-xl font-bold"}>21ºC</p>
                </div>
                <div
                    className={"bg-[#1A202C] w-28 h-36 hover:bg-white cursor-pointer  rounded-xl flex hover:text-black justify-center items-center  flex-col text-white"}>
                    <p className={"text-4xl"}><MdCloudQueue/></p>
                    <p>Thu</p>
                    <p className={"text-xl font-bold"}>18ºC</p>
                </div>
                <div
                    className={"bg-[#1A202C] w-28 h-36 hover:bg-white cursor-pointer hover:text-black  rounded-xl flex justify-center items-center  flex-col text-white"}>
                    <p className={"text-4xl"}><LuSun/></p>
                    <p>Fri</p>
                    <p className={"text-xl font-bold"}>25ºC</p>
                </div>
            </div>
        </div>
    );
};

export default Card;