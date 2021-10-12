import React from "react";
import "../App.css";
import moment from "moment";
import { format, compareAsc, parse } from "date-fns";


const Event = ({ day, priority, name, setTime }) => {
  


const form = 'P';
let pickedDate = "";
pickedDate = format(day, form);

const priorityType = ["red", "orange", "yellow", "green"];


  return(
      <div className="container-flush">
        <div className="row flex-middle">
          <div className="col col-start">
          <div className="eventIcon  " style={{color: priorityType[priority]}}>
            circle
          </div>
          </div>
          <div className="col col-center">
              <span> {setTime}]</span>
          </div>
          <div className="col col-end">
            <span> {name}</span>
          </div>
        </div>
      </div>
  )
};

export default Event;
