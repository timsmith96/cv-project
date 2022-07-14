import React, { Component } from 'react';
import '../styles/form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditMode: true,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value });
  }
  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isEditMode: false });
  }

  handleEditClick(event) {
    this.setState({ isEditMode: true });
  }

  render() {
    const isEditMode = this.state.isEditMode;
    if (isEditMode) {
      return (
        <div>
          <h1>General information</h1>
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label>First Name:</label>
              <input
                type="text"
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
            </div>
            <div className="form-control">
              <label>Last Name:</label>
              <input
                type="text"
                value={this.state.lastName}
                onChange={this.handleLastNameChange}
              />
            </div>
            <div className="form-control">
              <label>Email:</label>
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </div>
            <div className="form-control">
              <label>Phone:</label>
              <input
                type="text"
                value={this.state.phone}
                onChange={this.handlePhoneChange}
              />
            </div>
            <input className="submit-btn" type="submit" value="Save" />
          </form>
        </div>
      );
    }
    return (
      <div>
        <h1>General information</h1>
        <p> First Name: {this.state.firstName} </p>
        <p> Last Name: {this.state.lastName} </p>
        <p> Email: {this.state.email} </p>
        <p> Phone: {this.state.phone} </p>
        <button className="submit-btn" onClick={this.handleEditClick}>
          Edit fields
        </button>
      </div>
    );
  }
}

export default Form;
