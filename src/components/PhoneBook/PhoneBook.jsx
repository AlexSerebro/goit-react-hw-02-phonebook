import style from './PhoneBook.module.css'
import PropTypes from 'prop-types';
import { Component } from 'react'
import { Section } from 'components/Section';
import { Form } from 'components/Form';
import { ContactsList } from './Contacts'
import shortid from "shortid";


export class PhoneBook extends Component{
  state = {
  contacts: [],
    name: '',
    number:'',
  
  }

  addContact= (text, number) => {
    const contact = {
      id: shortid.generate(),
      name: text, 
      number: number,
     };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

    getContacts = () => {
    const { contacts } = this.state;
    return contacts.map((contact) =>
      contact.text
    );
  };
  
  render() {
    const {contacts} = this.state;

    return (
      <Section title='PhoneBook'>
        <Form onSubmit={this.addContact}/>
        {/* <Contacts names={ this.state}/> */}
        <ContactsList contacts={contacts}/>
      </Section>
    )}
}


// Section.propTypes = {
//   title: PropTypes.string.isRequired,
// }