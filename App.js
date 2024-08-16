import React from 'react' //react library used to create components
import AppointmentBooking from './AppointmentBooking' //it imports appointment booking compoent from appointment booking js file

function App() { // functional component
  return( //return statement contins jsx code html+js
    <div className="App"> 
    {/* outermost div for app component. class name to apply css in jsx */}
      <header className="App-header">
        {/* this is the header section within the app component it uses classname for styling*/}
      <AppointmentBooking />
      {/* this is the component */}
      </header>
      </div>
  );
}
export default App;