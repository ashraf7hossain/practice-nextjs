"use client";

import { useState } from "react";
import classes from "./ContactForm.module.css";

function ContactForm() {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterMessage, setEnterMessage] = useState("");
  const [enterName, setEnterName] = useState("");

  async function sendMessageHandler(event: React.FormEvent) {
    event.preventDefault();
    await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: enterName,
        email: enterEmail,
        message: enterMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section className={classes.contact}>
      <h1> How can I help you?</h1>
      <form onSubmit={sendMessageHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              value={enterName}
              onChange={(event) => setEnterName(event.target.value)}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              value={enterEmail}
              onChange={(event) => setEnterEmail(event.target.value)}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message</label>
          <textarea
            value={enterMessage}
            onChange={(event) => setEnterMessage(event.target.value)}
            name="message"
            id="message"
            rows={5}
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
