import style from './Input.module.css'
import PropTypes from 'prop-types';
import { Component } from 'react'

export class Input extends Component{
  render() {
    return (
      <input
        className={style.input_name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    )}
}