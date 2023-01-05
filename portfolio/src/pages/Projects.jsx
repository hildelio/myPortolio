import React, { Component } from "react";
import Cards from "../components/Cards";
import contents from "../components/Data";
import '../css/projects.css'

class Projects extends Component {
  render() {
    return (
      <div className="app-projects">
        {
          contents.map((item) => (<Cards
          key={ item.id }
          info={ item }
          />))
        }
      </div>
    );
  }
}

export default Projects;
