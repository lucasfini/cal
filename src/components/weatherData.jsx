import React from "react";
import "../App.css";
import moment from "moment";

const CardExampleCard = ({ weatherData }) => {
  return (
    <div className="container-flush">
      <div className="card crdimg1">
        <div className="row">
          <div className="col-12" align="left">
            <h5 className="card-title font-weight-bold crdttle1">
              {weatherData.name}
            </h5>
          </div>
        </div>
        <div className="card-body cb1">
          <div className="row">
            <div className="col-12">
              <p className="weatherbodyFontStyle">
                Temperature: {weatherData.main.temp}
              </p>
            </div>
            <div className="col-12">
              <p className="weatherbodyFontStyle">
                Temperature: {weatherData.main.temp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExampleCard;

{
  /*  <p className="weatherbodyFontStyle">Temperature: {weatherData.main.temp} </p> */
}
{
  /*
       <p className="weatherbodyFontStyle">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
       <p className="weatherbodyFontStyle">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
       <p className="weatherbodyFontStyle">Description: {weatherData.weather[0].main} </p>
       <p className="weatherbodyFontStyle">Humidity: {weatherData.main.humidity} %</p>
       <p className="weatherbodyFontStyle"> Day: {moment().format('dddd')}</p>
       <p className="weatherbodyFontStyle"> Date: {moment().format('ll')}</p>
*/
}
