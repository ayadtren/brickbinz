import React, { useState } from 'react';
import './Event.scss';
import axios from 'axios';

const BookEvent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      event_user_name: name,
      event_email: email,
      event_date: date,
      event_time: time,
      event_number_guest: numberOfGuests,
      event_description: description
    };

    try {
      await axios.post('http://localhost:8000/event', newEvent);
      alert('The event has been added to db');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          placeholder="Enter your name"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          placeholder="Enter your Email"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          type="time"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          placeholder="Enter number of guests"
          required
          type="number"
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
        />
      </label>
      <br/>
      Event Description
        <input
          placeholder="Enter Desc"
          required
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      <br />
      <button className="add-event" type="submit">
        Book Event
      </button>
    </form>
  );
};

export default BookEvent;
