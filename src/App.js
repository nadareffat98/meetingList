import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/navbar";
import MyCalender from "./components/my-calender/my-calender";
import MeetingList from "./components/body-content/meeting-list";
import MeetingDetails from "./components/body-content/meeting-details";


function App() {
  const [selectedMeeting, setSelectedMeeting] = useState(null);


  return (
    <div className="App">
      <Header />
      <div className="d-flex app-wrapper">
        <Navbar />
        <div className="d-flex flex-column body-wrapper">
          <MyCalender />
          <div className="d-flex justify-content-between align-items-center mt-2 meeting-container">
            <MeetingList
              setSelectedMeeting={setSelectedMeeting}
            />
            <MeetingDetails selectedMeeting={selectedMeeting} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
