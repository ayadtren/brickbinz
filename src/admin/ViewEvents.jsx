import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const handleAddToCalendar = (event) => {
    toast.success(`Added ${event.title} to calendar!`);
  };

  const handleRemoveEvent = (event_id) => async (e) => {
    try {
      await axios.delete("http://localhost:8000/event/" + event_id);
      window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
    // toast.success(`Removed ${event.title} from events!`);
  };

  const handleAcceptEvent = (event) => {
    toast.success(`Accepted ${event.title}!`);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">View Events</h2>
            {events.map((event, index) => (
              <div className="card mb-3" key={index}>
                <div className="card-body">

                  <p className="card-text">Customer's Email : {event.event_email}</p>
                  <p className="card-text">Date: {event.event_date}</p>
                  <p className="card-text">Time: {event.event_time}</p>
                  <p className="card-text">Number of Guests: {event.event_number_guest}</p>
                  <p className="card-text">Event Description: {event.event_description}</p>

                  <Button
                    variant="primary"
                    className="mr-2"
                    onClick={() => handleAddToCalendar(event)}
                  >
                    Add to Calendar
                  </Button>
                  <Button
                    variant="danger"
                    className="mr-2"
                    onClick={handleRemoveEvent(event.event_id)}
                  >
                    Remove Event
                  </Button>
                  {event.status === "upcoming" && (
                    <Button
                      variant="success"
                      onClick={() => handleAcceptEvent(event)}
                    >
                      Accept Event
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default ViewEvents;

