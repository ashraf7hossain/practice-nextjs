"use client";

import { useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../Notification";

async function sendContactData(contactDetails: any) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

function ContactForm() {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterMessage, setEnterMessage] = useState("");
  const [enterName, setEnterName] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  async function sendMessageHandler(event: React.FormEvent) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      sendContactData({
        email: enterEmail,
        name: enterName,
        message: enterMessage,
      });
      setRequestStatus("success");
    } catch (error) {
      setRequestStatus("error");
    }
  }

  let notificationData = {
    status: requestStatus,
    title:
      requestStatus === "pending"
        ? "Sending message..."
        : requestStatus === "success"
        ? "Success!"
        : "Error!",
    message:
      requestStatus === "pending"
        ? "Your message is on its way!"
        : requestStatus === "success"
        ? "Message sent successfully!"
        : "Something went wrong!",
  };

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
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
