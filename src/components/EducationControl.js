import React, { Component } from 'react';
import Education from './Education';
import uniqid from 'uniqid';

class EducationControl extends Component {
  constructor(props) {
    super(props);

    this.state = { educationIds: [] };

    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleClick(event) {
    this.setState((previousState) => ({
      educationIds: [...previousState.educationIds, uniqid()],
    }));
  }

  handleDeleteClick(id) {
    this.setState({
      educationIds: this.state.educationIds.filter((key) => {
        return key !== id;
      }),
    });
  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        {this.state.educationIds.map((id) => {
          return (
            <Education
              key={id}
              id={id}
              handleDeleteClick={this.handleDeleteClick}
            />
          );
        })}
        <button className="submit-btn" onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default EducationControl;
