import React, { Component } from 'react';
import '../styles/form.css';

class AddExperience extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onExperienceChange(e.target.value);
  }

  render() {
    return (
      <button className="submit-btn" onClick={this.handleChange}>
        Add
      </button>
    );
  }
}

export default AddExperience;
