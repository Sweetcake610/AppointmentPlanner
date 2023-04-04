import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList.js";

/*Based on the given requirements, implement ContactsPage as a stateful component 
to handle the logic for adding new contacts and listing current contacts. */

export const ContactsPage = (props) => {
  /*Receive two props: The current list of contacts / A callback function for adding a new contact*/
  const contacts = props.contacts;
  const addContact = props.addContact;

  /*Keep track of three local state values: the current name, phone, and email entered into the form*/
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [duplicate, setDuplicate] = useState(false);

 /*Check for duplicates whenever the name in the form changes and indicate the name is a duplicate */
 /*Only add a new contact on form submission if it does not duplicate an existing contact’s name
  A successful submission should clear the form */
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!duplicate) {
      addContact(name, phone, email);

      setName('');
      setPhone('');
      setEmail('');
    }
  };


  useEffect(() => {
    for(const contact of contacts) {
      if(name === contact.name) {
        setDuplicate(true);
      }
      return;
    }
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        {/*In the Add Contact section, render a ContactForm with the following passed via props:
          local state variables / local state variable setter functions / handleSubmit callback function*/}
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        {/* In the Contacts section, render a TileList with the contact array passed via props*/}
        <h2>Contacts</h2>
        <TileList 
          data={contacts} />
      </section>
    </div>
  );
};
