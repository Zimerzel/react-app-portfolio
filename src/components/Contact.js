import React, {useState} from 'react';
import { validateEmail, capitalizeFirstLetter } from "../utils/helpers";

function Contact() {
  
  return (
    <div className="contact">
      <h2>Contact Me</h2>
        <br />
        <div class="container">
          <form target="_blank" action="https://formsubmit.co/zach.jags99@gmail.com" method="POST" class="form">
            <div class="form-group">
              <div class="form-row">
                <div class="col">
                  <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                </div>
                <div class="col">
                  <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" class="form-group-btn">Submit Form</button>
          </form>
        </div>
        <h3>Prefer another method?</h3>
        <p>
          <span>Email:</span> Zach.imerzel@gmail.com<br/>
          <span>Phone:</span> (303)902-0091<br/>
        </p>
        <br></br>
        <br></br>
      </div>
  );
}

export default Contact;