import React from "react";

/*Based on the given requirements, implement ContactPicker as a stateless component that renders a drop-down list of all contact names.*/

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;
  return (
    <select onChange={onChange}>
      <option value="" key="default">Select Contact</option>

      {contacts.map( (contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};

/* Receive 2 props: The array of contacts / A callback function to handle when the onChange event is triggered
Render a select element with the onChange attribute set to the callback passed in via props
Have a default first option element that indicates no contact is selected
Iteratively add option elements using the contact names from the array passed in via props*/
