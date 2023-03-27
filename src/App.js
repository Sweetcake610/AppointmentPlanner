import {React, useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

/*Based on the given requirements, implement App as a stateful component that maintains appointments and contacts. 
It should also pass those values, along with callback functions to update those state values, to its child components. */

function App() {
  /*Keep track of the contacts and appointments data, each being an array of objects */
 const [contacts, setContacts] = useState([]);
 const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
 Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts.*/
 const addContact = (name, phone, email) => {
  setContacts( prev => [...prev, {name, phone, email}]);
 }

/*Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments */
 const addAppointment = (title, contact, date, time) => {
  setAppointments(prev => [...prev, {title, contact, date, time}]);
 }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Pass the array of contacts and the appropriate callback function as props to the ContactsPage component */}
            <ContactsPage 
              contacts={contacts}
              addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component */}
            <AppointmentsPage 
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
