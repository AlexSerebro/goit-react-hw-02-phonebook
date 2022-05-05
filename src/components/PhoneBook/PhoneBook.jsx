import style from './PhoneBook.module.css'
import PropTypes from 'prop-types';
import { Component } from 'react'
import { Section } from 'components/Section';

export class PhoneBook extends Component{
  render() {
    return (
      <Section title='PhoneBook'></Section>
    )}
}


// Section.propTypes = {
//   title: PropTypes.string.isRequired,
// }