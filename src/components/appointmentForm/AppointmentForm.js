import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

/*Based on the given requirements, implement AppointmentForm as a 
stateless component that renders a web form to collect the necessary appointment information.*/

/*Render a form with:
The onSubmit attribute set to the callback function passed in via props
3 controlled input components, to be used for the title, date and time appointment data
A ContactPicker component with the contacts list passed in via props
A submit button
Use getTodayString() to set the min attribute of the date input*/
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={({target}) => setTitle(target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={({target}) => setDate(target.value)} min={getTodayString()} />
      </label>
      <label>
        Time:
      <input type="time" value={time} onChange={({target}) => setTime(target.value)} />
      </label>
      <ContactPicker 
        contacts={contacts}
        value={contact}
        onChange={({target}) => setContact(target.value)} />

      <input type="submit" value="Add" />
    </form>
  );
};
