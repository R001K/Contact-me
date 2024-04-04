import React, { useState } from 'react';
import { db, collection, addDoc } from './firebase';
import './App.css'
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // State to track submission status

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (!name || !email || !mobile || !message) {
      alert("All fields are required.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'contacts'), {
        name: name,
        email: email,
        mobile: mobile,
        message: message,
        timestamp: new Date(),
      });

      console.log('Document written with ID: ', docRef.id);

      // Clear form fields
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');

      // Set success message in the state
      alert("Sent Successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please check the console for more details.");
    }
  };

  return (
    <>
    <div className="App">
      <div className='main'>

      
      <p className="getintouch">GET IN TOUCH</p>
      <form className="container" onSubmit={handleSubmit}>
        <input
        className="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required // Adding the "required" attribute to make it a required field
        />
        <input
          type="email"
          className="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          className="mobile"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
        className="msg"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></input>
        <button type="submit">Send        <lord-icon
                src="https://cdn.lordicon.com/eodeknny.json"
                trigger="hover"
              ></lord-icon></button>
      </form>

      {/* Display success or error message */}
      {submitStatus === 'Success' && <p>Message sent successfully!</p>}
      {submitStatus === 'Error' && <p>Message sending failed. Please try again later.</p>}
      </div>
    </div>
    </>
  );
}

export default ContactForm;
