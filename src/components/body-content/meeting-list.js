import React, { useState, useEffect } from "react";
import axios from "axios";

const MeetingList = ({ setSelectedMeeting }) => {
  const [meetings, setMeetings] = useState([]);

  const handleMeetingClick = (meeting) => {
    setSelectedMeeting(meeting);
  };

  useEffect(() => {
    // Fetch data using Axios
    axios
      .get("meetingData.json")
      .then((response) => {
        setMeetings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (meetings.length > 0) {
      handleMeetingClick(meetings[0]); // Automatically select the first meeting
    }
  }, [meetings]);

  return (
    <div className="d-flex flex-column justify-content-start align-items-start meetingList-wrapper  bg-white p-3">
      <form className="form-inline col-md-8 col-8 position-relative w-100 p-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <i className="material-icons search-icon">search</i>
      </form>
      <ul className="list-group w-100">
        {meetings.map((meeting, index) => (
          <li
            onClick={() => handleMeetingClick(meeting)}
            className="list-group-item border-top rounded mt-2 row py-2 px-0"
            key={index}
          >
            <div className="col-md-3 col-sm-12 d-flex flex-column align-items-center justify-content-center meetingDate-details">
              <img src={meeting.img} alt="" />
              <p className="time">{meeting.time}</p>
              <p className="period">{meeting.period}</p>
            </div>
            <div className="col-md-9 col-sm-12">
              <p className="title">{meeting.title}</p>
              <p className="date d-flex align-items-center mt-2">
                <i className="material-icons me-1">date_range</i>
                {meeting.date}
              </p>
              <p className="location d-flex align-items-center mt-2">
                <i className="material-icons me-1">location_on</i>
                {meeting.location}
              </p>
              <p className="group d-flex align-items-center mt-2">
                <i className="material-icons">group</i>
                {meeting.attendees.map((attendee, i) => (
                  <img key={i} src={'users/' + attendee.image} alt={`Attendee ${i}`} />
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingList;
