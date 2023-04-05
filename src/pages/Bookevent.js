import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Event.scss';

const BookEvent = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [numberOfGuests, setNumberOfGuests] = useState('');
const [description, setDescription] = useState('');
const [submitted, setSubmitted] = useState(false);

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
setSubmitted(true);
alert('The event has been added to db');
} catch (err) {
console.log(err);
}
};

const renderForm = () => {
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
<br />
<label>
Event Description
<input
placeholder="Enter Desc"
required
type="text"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
</label>
<br />
<button className="add-event" type="submit">
Book Event
</button>
</form>
);
};

const renderConfirmation = () => {
return (
<div className='center'>
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
<div>
<h1>Book your Lego Store Birthday Party Event</h1>
{submitted ? renderConfirmation() : renderForm()}
</div>
);
};

export default BookEvent;
