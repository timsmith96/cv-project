import React, { Component } from 'react';
import '../styles/form.css';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: true,
      company: '',
      position: '',
      responsibilities: '',
      date: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.props.onExperienceChange(e.target.value);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleEditClick() {
    this.setState({ isEditMode: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isEditMode: false });
  }

  handleDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    const isEditMode = this.state.isEditMode;
    if (isEditMode) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-control">
              <label>Company name:</label>
              <input
                type="text"
                name="company"
                onChange={this.handleInputChange}
                value={this.state.company}
              />
            </div>
            <div className="form-control">
              <label>Position title:</label>
              <input
                type="text"
                name="position"
                onChange={this.handleInputChange}
                value={this.state.position}
              />
            </div>
            <div className="form-control">
              <label>Responsibilities:</label>
              <input
                type="text"
                name="responsibilities"
                onChange={this.handleInputChange}
                value={this.state.responsibilities}
              />
            </div>
            <div className="form-control">
              <label>Date left job:</label>
              <input
                type="date"
                name="date"
                onChange={this.handleInputChange}
                value={this.state.date}
              />
            </div>
            <input type="submit" value="Save" className="submit-btn" />
          </form>
          <button className="submit-btn" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      );
    }
    return (
      <div>
        <p>Company name: {this.state.company}</p>
        <p>Position title: {this.state.position}</p>
        <p>Responsibilities: {this.state.responsibilities}</p>
        <p>Date left job: {this.state.date}</p>
        <button className="submit-btn" onClick={this.handleEditClick}>
          Edit
        </button>
      </div>
    );
  }
}

export default Experience;
