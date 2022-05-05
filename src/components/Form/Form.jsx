import style from './Form.module.css'
import PropTypes from 'prop-types';
import { Component } from 'react'
import { Input } from 'components/Input';


export class Form extends Component{
  state = {
    name: "",
  };

  hendleChange = (e) => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label>
          <p className={style.text}>Name</p>
          <input
        className={style.input_name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={this.state.name}
        onChange={this.hendleChange}
      />
          <button type='submit' className={style.button}>Add contact</button>
        </label>
      </form>

    )}
}