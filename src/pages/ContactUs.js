import React from "react";
import "../styles/contact.scss";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div class="jumbotron">
        <h1 class="display-4">Contact Us!</h1>
        <p class="lead">
          If you have any questions or concerns, please contact us!
        </p>
        <hr class="my-4" />
        <p>
          Please enter your email address and name, and we will get back to you!
        </p>
      </div>

      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Name"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">
              Submit
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
