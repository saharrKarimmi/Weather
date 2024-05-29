import {LuSun} from "react-icons/lu";
import React from "react";
import {MdCloudQueue} from "react-icons/md";
import {FaCloudRain} from "react-icons/fa";
import {BsCloudSnowFill} from "react-icons/bs";

const WeatherCard = ({data, propes}) => {
    return (
        <div
            className={"bg-[#1A202C] hover:bg-white cursor-pointer w-28 h-36 rounded-xl text-white hover:text-black  flex justify-center items-center  flex-col"}>
            {propes.map((item, id) => (
                <div key={id}>
                    <p className={"text-4xl"}>
                        {item.description === "Sunny" ? <LuSun/> : item.description === "Clear sky" ?
                            <MdCloudQueue/> : item.description === " rainy" ? <FaCloudRain/> : item.description === "snowy" ?
                                <BsCloudSnowFill/> : alert("Data is not available !")}
                    </p>
                    <p>{item.description}</p>
                </div>
            ))}
            <p className={"text-xl font-bold"}>{data.main.temp} ºF</p>
        </div>
    );
};

export default WeatherCard;
// این را بپرسم ک کجا و چطور روی کامپوننت کارت در کامپوننت بالا حلقه بزنم؟
//و حلقه  این صفحه را زیاد بلد نیستم راهنمایی بگیرم
