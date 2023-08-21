import React, { useState } from "react";
import DatePicker from "react-datepicker";

const MyCalender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dayName, setSelectedDay] = useState(" ");

  const handleDateChange = (date) => {
    setSelectedDay(date.toLocaleString("en-us", { weekday: "long" }));
    setSelectedDate(date);
  };

  const handleTodayButtonClick = () => {
    setSelectedDate(new Date());
  };

  const handlePreviousButtonClick = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextButtonClick = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };
  const [activeButton, setActiveButton] = useState("day");

  const handleButtonClick = (item) => {
    setActiveButton(item);
  };
  return (
    <div className="d-flex flex-column bg-white px-3 calendar-wrapper">
      <div className="row align-items-center px-0 py-2 border-bottom">
        <div className="col-md-4 col-sm-12  d-flex align-items-center">
          <i className="material-icons">date_range</i>
          <h4 className="p-0 mb-0 ms-2">My Calendar</h4>
        </div>
        <div className="col-md-8 col-sm-12 d-flex justify-content-end align-items-center p-0">
          <div className="bg-light rounded py-2 px-2">
            <button
              type="button"
              className={`btn bg-white py-0 px-3 mx-1 ${
                activeButton === "day" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("day")}
            >
              Day
            </button>
            <button
              type="button"
              className={`btn bg-white py-0 px-3 mx-1 ${
                activeButton === "week" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("week")}
            >
              Week
            </button>
            <button
              type="button"
              className={`btn bg-white py-0 px-3 mx-1 ${
                activeButton === "month" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("month")}
            >
              Month
            </button>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 p-0">
          <div className="container mt-1">
            <div className="d-flex mb-3 calender-actions">
              <button
                className="navigation-btn"
                onClick={handlePreviousButtonClick}
              >
                <span className="material-icons">arrow_back_ios</span>
              </button>
              <div className="position-relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd-MMMM-yyy"
                  className="form-control"
                />
                <i className="material-icons  calender-icon">date_range</i>
              </div>
              <button
                className="navigation-btn"
                onClick={handleNextButtonClick}
              >
                <span className="material-icons">arrow_forward_ios</span>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={handleTodayButtonClick}
              >
                Today
              </button>

              <button className="btn btn-dark" onClick={handleTodayButtonClick}>
                Create Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalender;
