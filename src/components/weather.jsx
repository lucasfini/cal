import React, { useEffect, useState } from "react";
import { WiDegrees } from "react-icons/wi";
import { TiLocation } from "react-icons/ti";
import Divider from "@material-ui/core/Divider";

import "../App.css";
import moment from "moment";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  const temp =
    data === undefined ? 0 : data.main === undefined ? 0 : data.main.temp;


    const date =  moment().format('dddd, MMMM Do YYYY')
    console.log(date);

  let mySubstringFunc = (word) => {
    return word.toString().substring(0, 2);
  };

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
          return result;
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="container-flush ">
      <div className="card crdimg1">
        <div className="card-body cb1">
          <div className="row ">
            <div className="col-4 ">
              <div className="row">
                <div className="col-12 " align="start">
                  <p className="weatherDescription">
                    {" "}
                    {data === undefined
                      ? 0
                      : data.main === undefined
                      ? 0
                      : data.weather[0].main}
                  </p>
                </div>
              </div>
              <div className="row  ">
                <div className="col-8 p-0 " align="center">
                  <span className="weatherTemperature p-0 ">
                    {mySubstringFunc(temp)}
                  </span>
                </div>
                <div className="col-2  p-0 " align="start">
                  <div className="tempIcon">
                    <WiDegrees />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1 p-0  divider">
              <div className="verticalLine">
                <Divider orientation="vertical" color="textSecondary" />
              </div>
            </div>
            <div className="col-7 p-0  weatherLastCol">
              <div className="row  ">
              <div className="col-12 p-0" align="start">
              <div className="weatherDate">
             {date}
                  </div>
              </div>
              </div>
              <div className="row ">
                <div className="col-1 p-0 " align="start">
                <div className="locationIcon">
                    <TiLocation />
                  </div>
                  </div>
                  <div className="col-10 p-0  " align="start">
               <p className="weatherLocation m-0">
                    {" "}
                    {data === undefined
                      ? 0
                      : data.main === undefined
                      ? 0
                      : data.name}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
