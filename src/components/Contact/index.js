import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section id= "contact-form-main">
      <h2 data-testid="h1tag">Contact me!</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div id="contact-name">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Bill Gates" defaultValue={name} onBlur={handleChange} />
        </div>
        <div id="contact-email">
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" placeholder="billgates@gmail.com" defaultValue={email} onBlur={handleChange} />
        </div>
        <div id="contact-message">
          <label htmlFor="message">Message:</label>
          <textarea placeholder="Hello! Have you heard of my program Traf-o-Data?"name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        <p>or at</p>
        <br></br>
        <p id="emailtxt">zachary.imerzel@gmail.com</p>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
