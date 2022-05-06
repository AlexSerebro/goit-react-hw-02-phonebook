import style from './PhoneBook.module.css'
import PropTypes from 'prop-types';
import { Component } from 'react'
import { Section } from 'components/Section';
import { Form } from 'components/Form';
import { Contacts } from './Contacts'
import { Filter } from "components/Filter";
import shortid from "shortid";

const CONTACT_LIST = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class PhoneBook extends Component{
  state = {
  contacts: [...CONTACT_LIST],
    name: '',
    number: '',
    filter: '',
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

    changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

    getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalazedFilter)
    );
  };


  
  render() {
    const { contacts, filter } = this.state;
    const vizibleContacts = this.getVisibleContacts();

    return (
      <Section title='PhoneBook'>
        <Form onSubmit={this.addContact}/>
        <p className={style.text}>Contacts</p>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts contacts={vizibleContacts}/>
      </Section>
    )}
}


// Section.propTypes = {
//   title: PropTypes.string.isRequired,
// }