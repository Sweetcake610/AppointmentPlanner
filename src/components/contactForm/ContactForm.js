import React from "react";

/*Based on the given requirements, implement ContactForm as a stateless component that 
renders a web form to collect the necessary contact information.*/

/* Render a form with: The onSubmit attribute set,
    3 controlled <input> elements, one for each piece of contact data & A submit button */

export const ContactForm = ({
  name, setName,
  phone, setPhone,
  email, setEmail,
  onSubmit }) => {
  return (
    
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={({target}) => setName(target.value)} />
      </label>
      <label>
        Phone:
        <input type='tel' value={phone} pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}' onChange={({target}) => setPhone(target.value)} />
      </label>
      <label>
        Email:
        <input type='email' value={email} onChange={({target}) => setEmail(target.value)} />
      </label>
      <input type="submit" value="Add" />
    </form>
  );
};
