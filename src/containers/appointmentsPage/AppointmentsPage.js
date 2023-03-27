import  React, {useState} from "react";
import {AppointmentForm} from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

/*Based on the given requirements, implement AppointmentsPage as a stateful 
component that handles the logic for adding new appointments and listing current appointments.*/

export const AppointmentsPage = (props) => {
  /* Receives three props
  The current list of appointments / The current list of contacts / A callback function for adding a new appointment
  */
 const appointments = props.appointments;
 const contacts = props.contacts;
 const addAppointment = props.addAppointment;

 /*Keep track of four local state variables, the current title, contact, date, and time entered into the form */
 const [title, setTitle] = useState('');
 const [contact, setContact] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  Add a new appointment on form submission
    */
   addAppointment(title, contact, date, time);

   setTitle('');
   setContact('');
   setDate('');
   setTime('');
   
  };
/*In the Add Appointment section, render an AppointmentForm with the following passed via props:
local state variables / local state variable setter functions / handleSubmit callback function
In the Appointments section, render a TileList with the appointment array passed via props*/
  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          onSubmit={handleSubmit} 
          contacts={contacts} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
