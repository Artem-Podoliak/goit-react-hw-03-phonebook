import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onContactFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.contactFormReset();
  };

  contactFormReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={css.wraper}>
        <form className={css.form} onSubmit={this.onContactFormSubmit}>
          <label className={css.label} htmlFor={this.nameId}>
            Name
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              id={this.nameId}
              onChange={this.onInputChange}
              required
            />
          </label>
          <label className={css.label} htmlFor={this.numberId}>
            Number
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.onInputChange}
              id={this.numberId}
              required
            />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
