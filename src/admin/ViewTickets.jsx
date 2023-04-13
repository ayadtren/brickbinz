import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import "../styles/admin-nav.scss";
import axios from "axios";

const ViewTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/ticket")
    .then(response => {
      setTickets(response.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const handleRemove = (ticket_id) => async (e) => {
    try {
      await axios.delete("http://localhost:8000/ticket/" + ticket_id);
      window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
   <section>
      <Container>
        <Row>
          <Col lg="12"> 
          <h2 className="text-center mb-4">View Tickets</h2>
          {tickets.map((ticket, index) => (
            <div className="card mb-3" key={index}>
              <div className="card-body">
                <p className="card-text"><b>Customer's Email</b> : {ticket.ticket_email}</p>
                <p className="card-text"><b>Name :</b> {ticket.ticket_username}</p>
                <p className="card-text"><b>Message :</b> {ticket.ticket_message}</p>
                <Button
                  variant="danger"
                  className="mr-2"
                  onClick={handleRemove(ticket.ticket_id)}
                >
                  Remove Ticket
                </Button>
              </div>
            </div>
          ))}
          </Col>
        </Row>
      </Container>
   </section>
  );
};

export default ViewTickets;
