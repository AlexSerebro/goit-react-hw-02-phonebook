import style from './PhoneBook.module.css'
import PropTypes from 'prop-types';
import { Component } from 'react'
import { Section } from 'components/Section';
import { Form } from 'components/Form';
import { Contacts } from './Contacts'
import shortid from "shortid";


export class PhoneBook extends Component{
  state = {
  contacts: [],
  name: ''
  }

  addContact= (text) => {
    const contact = {
      id: shortid.generate(),
      name: text, //like text: text;
     };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  
  render() {
    return (
      <Section title='PhoneBook'>
        <Form onSubmit={this.addContact}/>
        {/* <Contacts names={ this.state}/> */}
      </Section>
    )}
}


// Section.propTypes = {
//   title: PropTypes.string.isRequired,
// }