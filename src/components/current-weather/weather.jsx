import React from 'react';

import "./weather.css"





const CurrentWeather =({data})=>{
    return (
        <div className="weather">
            <div className="top">
                <span>
                <p className="city">{data.city}</p>
                <p className="weather-description">{data.weather[0].description}</p>  
                </span>
                
                <img alt="weather" className="weather-icon" src={`/weatherApp/icon/${data.weather[0].icon}.png`}/> 

                
                
             
              

            </div>

            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°F </p>
                <div className="details">
                    <div className="parameter-row">
                    <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°F </span>

                   </div>

                   <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed}m/s</span>

                   </div>
                   <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>

                   </div>
                   <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure}Pas</span>

                   </div>

                    
                </div>



            </div>

        </div>
    );
}


export default CurrentWeather