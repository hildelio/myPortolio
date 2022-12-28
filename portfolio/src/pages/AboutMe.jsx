import React, { Component } from "react";
import aboutMe from '../assets/aboutMe.png';
import '../css/aboutMe.css'

class AboutMe extends Component {
  render() {
    return (
      <div className="app-aboutMe">
          <div className="picture">
            <img
              className="avatar"
              src="https://avatars.githubusercontent.com/u/106602737?v=4"
              alt="avatar"
            />
            <p>Connect with me:{' '}
              <a href="https://linkedin.com/in/hildelio-junior" target="blank">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="hildelio"
                  height="20"
                  width="20"
                />
              </a>
            </p>
          </div>
        <img className="object-img" src={aboutMe} alt='aboutMe' />
      </div>
    );
  }
}

export default AboutMe;
