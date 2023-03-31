import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import  { useEffect, useState } from "react";
import axios from "axios";

const ViewEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/event')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <table className="eventView">
        <thead>
          <tr>
            
            <th>User Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Number of Guests</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.event_id}>
              
              <td>{event.event_user_name}</td>
              <td>{event.event_email}</td>
              <td>{event.event_date}</td>
              <td>{event.event_time}</td>
              <td>{event.event_number_guest}</td>
              <td>{event.event_description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEvents;
