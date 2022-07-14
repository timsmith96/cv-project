import React, { Component } from 'react';
import '../styles/form.css';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: true,
      institution: '',
      course: '',
      from: '',
      to: '',
    };

    this.handleInstitutionChange = this.handleInstitutionChange.bind(this);
    this.handleCourseChange = this.handleCourseChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleInstitutionChange(event) {
    this.setState({ institution: event.currentTarget.value });
  }

  handleCourseChange(event) {
    this.setState({ course: event.currentTarget.value });
  }

  handleFromChange(event) {
    this.setState({ from: event.currentTarget.value });
  }

  handleToChange(event) {
    this.setState({ to: event.currentTarget.value });
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
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label>Institution:</label>
              <input
                type="text"
                value={this.state.institution}
                onChange={this.handleInstitutionChange}
              />
            </div>
            <div className="form-control">
              <label>Course:</label>
              <input
                type="text"
                value={this.state.course}
                onChange={this.handleCourseChange}
              />
            </div>
            <div className="form-control">
              <label>From:</label>
              <input
                type="date"
                value={this.state.from}
                onChange={this.handleFromChange}
              />
            </div>
            <div className="form-control">
              <label>To:</label>
              <input
                type="date"
                value={this.state.to}
                onChange={this.handleToChange}
              />
            </div>
            <input className="submit-btn" type="submit" value="Save" />
          </form>
          <button
            onClick={() => {
              this.props.handleDeleteClick(this.props.id);
            }}
            className="submit-btn"
          >
            Delete
          </button>
        </div>
      );
    }
    return (
      <div>
        <h1>General information</h1>
        <p> Institution: {this.state.institution} </p>
        <p> Course: {this.state.course} </p>
        <p> From: {this.state.from} </p>
        <p> To: {this.state.to} </p>
        <button className="submit-btn" onClick={this.handleEditClick}>
          Edit fields
        </button>
      </div>
    );
  }
}

export default Education;
