import React from "react";
import { useGitHubApi } from "../utiles/useGitHubApi.js";
import { AboutTextClass } from "./AboutTextClass.js";


class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData : ""
    }
  }

  async componentDidMount() {
    const jsonProfileData = await useGitHubApi();
    this.setState({profileData : this.state.profileData = jsonProfileData});
  }

  render() {
      return (
        <div className="about-body">
          <h1>ABOUT</h1>
  
          <AboutTextClass/>
  
          <div className="profile-container">
            <div className="img-container">
              <img src={this.state.profileData.avatar_url}></img>
            </div>
            <div className="profile-details-container">
              <h2>DEVELOPED BY</h2>
              <h3>{this.state.profileData.name}</h3>
              <h4>{this.state.profileData.bio}</h4>
              <a href={this.state.profileData.html_url} target="_blank">GITHUB</a>
            </div>
          </div>
        </div>
      )
    }}
    

export default AboutClass;