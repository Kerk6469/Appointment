// import React, {useState} from 'react'; //Importing react and useState hook from react library
// import './AppointmentBooking.css'; //Importing styles from AppointmentBooking.css

// const AppointmentBooking = () => { // defining a functional component named AppointmentBooking
//     const [name, setName] = useState(''); //name is the state variable and setname is a function that updates value of name
//     const [email, setEmail] = useState(''); // email is the state variable and setEmail is the function which updates the value of the email
//     const [date, setDate] = useState(''); //date is the state variable and setDate is the function that updates the value
//     const [time, setTime] = useState(''); //time is the state variable and setTime is the function that updates the value of the time
//     const [message, setMessage] = useState(''); //message is the state variable and setMessage is the function thst updates the value of the message
//     //Using the useState hook to create state variables for form inputs and a message. The initial values are empty strings.
// };
// //Form submission handler
// const handleSubmit = (e) => { //e is the event object passed to the handleSubmit function when the form is submitted. It contains information about the event and provides methods to control the event's default behavior.
//     e.preventDefault(); //prevents page from reloading allowing for custom form handing in javascript
//     console.log({name, email, date, time}); //logs the name, email, date and time onto the page
//     setMessage('Appointment booked successfully!'); //prints Appointment booked successfully!
//     setName(''); //resets states variables value
//     setEmail(''); //resets states variables value
//     setDate(''); //resets states variables value
//     setTime(''); //resets states variables value
//   };
//   return (
//     <div className="appointment-container">
//       <h2>Book an Appointment</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//            </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="date">Date:</label>
//           <input
//             type="date"
//             id="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="time">Time:</label>
//           <input
//             type="time"
//             id="time"
//             value={time}
//             onChange={(e) => setTime(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Book Appointment</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };
// export default AppointmentBooking;

import React, { useState } from 'react';  //Importing react and useState hook from react library
import './AppointmentBooking.css'; //Importing styles from AppointmentBooking.css
const AppointmentBooking = () => { //functional component named appointment booking
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => { //e is the event object passed to the handleSubmit function when the form is submitted. It contains information about the event and provides methods to control the event's default behavior.
    e.preventDefault(); //prevents from deleting when page reloads
    // Here you can handle form submission, e.g., sending data to the backend
    console.log({ name, email, date, time }); //logs the name, email, date and time onto the page
    setMessage('Appointment booked successfully!'); //prints Appointment booked successfully!
    setName(''); //resets states variables value
    setEmail(''); //resets states variables value
    setDate(''); //resets states variables value
    setTime(''); //resets states variables value
  };
  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        {/* submitting the form */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Tab for Name */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Tab for Email */}
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        {/* Tab for Date */}
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        {/* Tab for Time */}
        <button type="submit">Book Appointment</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    // Submit button
  );
};
export default AppointmentBooking;