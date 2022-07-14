import React, { Component } from 'react';
import './styles/form.css';
import GeneralInfo from './components/GeneralInfo';
import EducationControl from './components/EducationControl';
import Experience from './components/Experience';
import AddExperience from './components/AddExperience';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { experienceIds: [] };
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleExperienceChange() {
    this.setState((previousState) => ({
      experienceIds: [...previousState.experienceIds, uniqid()],
    }));
  }

  handleDelete(id) {
    this.setState({
      experienceIds: this.state.experienceIds.filter((key) => {
        return key !== id;
      }),
    });
  }

  render() {
    const experienceSections = this.state.experienceIds.map((id) => {
      return <Experience key={id} onDelete={this.handleDelete} id={id} />;
    });
    return (
      <div>
        <GeneralInfo />
        <EducationControl />
        <h1>Experience</h1>
        {experienceSections}
        <AddExperience onExperienceChange={this.handleExperienceChange} />
      </div>
    );
  }
}

export default App;
