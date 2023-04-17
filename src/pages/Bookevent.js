import React, { useState } from "react";
import axios from "axios";
import "../styles/Event.scss";

const BookEvent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      event_user_name: name,
      event_email: email,
      event_date: date,
      event_time: time,
      event_number_guest: numberOfGuests,
      event_description: description,
    };
    try {
      await axios.post("http://localhost:8000/event", newEvent);
      setSubmitted(true);
      alert("The event has been added to db");
    } catch (err) {
      console.log(err);
    }
  };

  const renderForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Full Name"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput2">Email</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Enter Email"
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput">Date</label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Date"
          />
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput">Time of Event</label>
          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Time"
          />
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput">Number of Guests</label>
          <input
            required
            type="number"
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Number of Guests"
          />
        </div>
        
        <div class="form-group">
          <label for="formGroupExampleInput">Description</label>
          <input
            required
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Enter Description"
          />
        </div>

        <div className="button-event">
          <button type="button" class="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    );
  };

  const renderConfirmation = () => {
    return (
      <div className="center">
        <h2>Thank you for your booking!</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Number of guests: {numberOfGuests}</p>
      </div>
    );
  };

  return (
    <div className="book-event-container">
      <h1>Book your Lego Store Birthday Party Event</h1>
      {submitted ? renderConfirmation() : renderForm()}
    </div>
  );
};

export default BookEvent;
