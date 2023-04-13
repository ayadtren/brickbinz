import React, { useState } from "react";
import axios from "axios";
import "../styles/contact.scss";

const Ticket = () => {
  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = {
      ticket_email: email,
      ticket_username: name,
      ticket_message: message
    };

    try {
      await axios.post("http://localhost:8000/ticket", newTicket);
      setSubmitted(true);
      alert("Ticket has been sent")
    } catch (err) {
      console.log(err);
    }
  }

  const renderForm = () => {
    return (
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            required 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div> 

        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Name"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <p class="lead">
            <button class="btn btn-primary btn-lg" href="#" role="button" onClick={handleSubmit}>
              Submit
            </button>
          </p>
        </div>
      </form>
    );
  };

  const renderConfirmation = () => {
    return (
      <div className="center">
        <h2>Thank you for submitting a ticket!</h2>
        <p>We will come back to you {name} at your email: {email}</p>
      </div>
    );
  };


  return (
    <div className="contact-us">
      <div class="jumbotron">
        <h1 class="display-4">Contact Us!</h1>
        <p class="lead">
          If you have any questions or concerns, please contact us!
        </p>
        <hr class="my-4" />
      </div>
      {submitted ? renderConfirmation() : renderForm()}
    </div>
  );
};

export default Ticket;
