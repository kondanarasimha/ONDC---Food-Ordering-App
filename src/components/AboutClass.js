import React from "react";
import { gitHubApiUrl } from "../utiles/urls.js";
import { AboutTextClass } from "./AboutTextClass.js";


export class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData : {}
    }
  }

  async componentDidMount() {
    const data = await fetch(gitHubApiUrl);
    const jsonProfileData = await data.json();
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
  }
}
