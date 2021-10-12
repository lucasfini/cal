import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import addMonths from "date-fns/addMonths";
import subMonths from "date-fns/subMonths";
import addDays from "date-fns/addDays";
import isSameMonth from "date-fns/isSameMonth";
import isSameDay from "date-fns/isSameDay";
import startOfWeek from "date-fns/startOfWeek";
import startOfMonth from "date-fns/startOfMonth";
import endOfWeek from "date-fns/endOfWeek";
import endOfMonth from "date-fns/endOfMonth";
import { format, compareAsc, parse } from "date-fns";
import Event from './calEvent';
import PopupMenu from "./popupMenu";

export default class Cell extends Component {
 
 
 
    renderEvents = () => {
        if(this.props.events == undefined || this.props.events == null || this.props.events.length == 0)
        { 
            return (<div></div>)
        }
    return this.props.events.map((dayEvent) => {
      return (
        
          <Event key={dayEvent} day={this.props.i} priority={dayEvent.priority} name={dayEvent.name} setTime={dayEvent.setTime} />
        
      );
    });
  };


  render() {
      
    return (
      <div
        className={`${format(this.props.day, "P")} col cell ${
          !isSameMonth(this.props.day, this.props.monthStart)
            ? "disabled"
            : isSameDay(this.props.day, this.props.selectedDate)
            ? "selected"
            : ""
        }`}
        key={"cell_" + this.props.i}
        onClick={() => {
          this.props.onDateClick(this.props.cloneDay);
          
       //   this.props.handleAddEvent(this.props.i);
        }}
      >
         <PopupMenu handleMenuEvent={() => this.}/>
        {this.renderEvents()}
        <span className="number">{this.props.formattedDate}</span>
        <span className="bg">{this.props.formattedDate}</span>
      </div>
    );
  }
}
