import React from 'react';
import "./Event.scss"

class Bookevent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            date: '',
            time: '',
            numberOfGuests: '',
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        this.setState({
            submitted: true
        });
        event.preventDefault();
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input placeholder="Enter your name" required 
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input placeholder="Enter your Email" required
                        type="email"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Date:
                    <input
                        type="date" required
                        value={this.state.date}
                        name="date"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Time: 
                    <input
                        type="time" required
                        value={this.state.time}
                        name="time"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label> 
                    Number of guests: 
                    <input placeholder="Enter number of guests" required
                        type="number"
                        value={this.state.numberOfGuests}
                        name="numberOfGuests"
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <input type="submit" value="Book" />
            </form>
        );
    }

    renderConfirmation() {
        return (
            <div className='center'>
                <h2>Thank you for your booking!</h2>
                <p>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
                <p>Date: {this.state.date}</p>
                <p>Time: {this.state.time}</p>
                <p>Number of guests: {this.state.numberOfGuests}</p>
            </div>
        );
    }

    render() {
        return this.state.submitted ? (
            this.renderConfirmation()
        ) : (
            <div>
                <h1>Book your Lego Store Birthday Party Event</h1>
                {this.renderForm()}
            </div>
        );
    }
}

export default Bookevent;
