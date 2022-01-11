import React, { Component, PropTypes, useEffect, useState } from "react";
import Event from "./calEvent";
import $ from "jquery";
import Modal from "@material-ui/core/Modal";
import CircleOutlinedIcon from "@material-ui/icons";
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


import Cell from "./cell";
import PopupCard from "./popupCard";

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      events: new Array(42),
      menus: new Array(42),
      ishidden: true,
    };
  }

  renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "EEEE";
    const days = [];

    let startDate = startOfWeek(this.state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }

  renderCells = () => {
    const { currentMonth, selectedDate } = this.state;

    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    let counter = 0;
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;

        days.push(
      
          <Cell
            day={day}
            key={"cal_" + counter}
            i={counter}
            formattedDate={formattedDate}
            monthStart={monthStart}
            selectedDate={selectedDate}
            events={this.state.events[counter]}
            menus={this.state.menus[counter]}
            cloneDay={cloneDay}
            onDateClick={(cloneDay) => this.onDateClick(cloneDay)}
            handleAddEvent={(index) => this.handleAddEvent(index)}
           // handleAddMenu={(index) => this.handleAddMenu(index)}
          ></Cell>
        );
        day = addDays(day, 1);
        counter++;
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );

      days = [];
    }

    return <div className="body">{rows}</div>;
  };

  onDateClick = (day) => {
    this.setState({
      selectedDate: day,
    });

    // <Event day={day} priority={1} name={"Event"} setTime={"4:50"}  />
  };

  

  handleAddEvent = (index) => {
    var arr = this.state.events;

    if (
      arr[index] == undefined ||
      arr[index] == null ||
      arr[index].length == 0
    ) {
      arr[index] = [];
    }
    arr[index].push({ priority: 1, name: "Event", setTime: "4:50" });

    this.setState({
      events: arr,
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1),
    });
  };
  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1),
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;
