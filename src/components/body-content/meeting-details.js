import React from "react";

const MeetingDetails = ({ selectedMeeting }) => {
  const dateParts = selectedMeeting?.date.split(", ");
  const formattedDate = dateParts ? dateParts[1].split(" ") : [];

  return (
    <div className="meetingDetails-wrapper  px-2 ">
      <div className="data h-100 row bg-white px-3 pt-3">
        <div className="col-md-2 col-sm-12 d-flex align-items-center flex-column text-center">
          <img className="meeting-img" src={selectedMeeting?.img} alt="" />
          <p className="time">{selectedMeeting?.time}</p>
          <p className="period grey-text fw-bold">{selectedMeeting?.period}</p>
        </div>
        <div className="col-md-2 col-sm-12 d-flex flex-column text-center">
          {dateParts && dateParts.length != 0 && (
            <>
              <span className="grey-text fw-bold">{dateParts[0]}</span>
              {formattedDate && formattedDate.length != 0 && (
                <>
                  <span>{formattedDate[1]}</span>
                  <span className="grey-text fw-bold">{formattedDate[0]}</span>
                </>
              )}

              <span className="grey-text fw-bold">{dateParts[2]}</span>
            </>
          )}
        </div>

        <div className="col-md-6 col-sm-10 px-2 p-0">
          <p className="title fw-bold mb-1">{selectedMeeting?.title}</p>
          <div className="d-flex">
            {" "}
            <span className="meeting-details-title">Organizer</span>
            <span className="meeting-details-value">Mohamed Ali </span>
          </div>

          <div className="d-flex">
            {" "}
            <span className="meeting-details-title">Meeting Type</span>
            <span className="meeting-details-value">Interview Meeting</span>
          </div>

          <div className="d-flex">
            {" "}
            <span className="meeting-details-title">Format Virtual</span>
            <span className="meeting-details-value">Meeting</span>
          </div>
        </div>
        <div className="col-md-2 col-sm-2 p-0 text-end dropdown">
          <i
            className="material-icons meeting-menu dropdown-toggle"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            more_vert
          </i>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Reschedule Meeting
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Cancel Meeting
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Add to calendar
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Send Reminder</a>
            </li>
          </ul>
        </div>

        {/* ****************** zoom meeting ************ */}
        <div className="d-flex mt-3 flex-column">
          <span className="title fw-bold">Virtual Meeting</span>
          <div className="row">
            <span className=" d-flex align-items-center col-1 p-0 px-1">
              <img className="w-100" src="zoom.png" />
            </span>
            <span className="col-10 p-0 zoom-link cursor-pointer">
              <a href="#">
                https://us06web.zoom.us/j/85274834351pwd=ODFXNWljT1gzN0w0T3drLzR3UFRoZz09
              </a>
            </span>
            <span className="col-1 p-0 text-end">
              <span className="material-icons cursor-pointer">
                content_copy
              </span>
            </span>
          </div>
        </div>

        <div className="d-flex mt-3 flex-column">
          <span className="title fw-bold">Meeting Agenda & Remarks:</span>
          <div className="meeting-description   mt-1">
            Lorem ipsum dolor sit amet consectetur. Musasdasdasdsa nibh ornare
            facilisis commodo fermentum. Nibh dui malesuada pulvinar ut donec
            morbi id.
          </div>
        </div>
        {selectedMeeting?.attendees &&
          selectedMeeting?.attendees.length != 0 && (
            <>
              <div className="d-flex mt-3 flex-column">
                <div className="d-flex">
                  <span className="title fw-bold">Meeting Attendees</span>
                  <span className="attendees-num">
                    {selectedMeeting?.attendees.length}
                  </span>
                </div>
              </div>

              <div className="d-flex mt-3 flex-column">
                {selectedMeeting.attendees.map((attendee, i) => (
                  <div className="d-flex my-2" key={i}>
                    <img
                      className="attendee-img"
                      key={i}
                      src={"users/" + attendee.image}
                      alt={`Attendee ${i}`}
                    />
                    <div className="d-flex flex-column ms-2">
                      <span className="fw-bold">{attendee.name}</span>
                      <div className="d-flex align-items-center">
                        <span className="attendee-job fw-bold">
                          {attendee.job}
                        </span>
                        <img
                          className="mobile-type-img mx-1"
                          key={i}
                          src={attendee.mobile_type + ".png"}
                          alt={`Attendee ${i}`}
                        />
                        <sub className="mobile-type fw-bold">
                          {attendee.mobile_type}
                        </sub>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default MeetingDetails;
