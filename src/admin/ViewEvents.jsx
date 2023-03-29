import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewEvents = () => {
  const events = [
    {
      title: "Event 1",
      date: "2023-04-01",
      status: "upcoming",
    },
    {
      title: "Event 2",
      date: "2023-03-28",
      status: "current",
    },
    {
      title: "Event 3",
      date: "2023-04-05",
      status: "upcoming",
    },
  ];

  const handleAddToCalendar = (event) => {
    toast.success(`Added ${event.title} to calendar!`);
  };

  const handleRemoveEvent = (event) => {
    toast.success(`Removed ${event.title} from events!`);
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
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">Date: {event.date}</p>
                  <p className="card-text">Status: {event.status}</p>
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
                    onClick={() => handleRemoveEvent(event)}
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
