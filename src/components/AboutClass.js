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
        <div className="py-24 px-24">
          <h1 className="font-semibold text-4xl text-center mb-4 mt-4">ABOUT</h1>
  
          <AboutTextClass/>
  
          <div className="flex gap-5 justify-center">
            <div>
              <img className="w-56 rounded-lg" src={this.state.profileData.avatar_url}></img>
            </div>
            <div className="mt-1">
              <h2 className="text-3xl font-semibold text-gray-400 mb-1" >DEVELOPED BY</h2>
              <h3 className="text-2xl mb-0.5 font-bold">{this.state.profileData.name}</h3>
              <h4 className="text-1xl mb-0.5">{this.state.profileData.bio}</h4>
              <a className="font-bold underline" href={this.state.profileData.html_url} target="_blank">GITHUB</a>
            </div>
          </div>
        </div>
      )
    }}
    

export default AboutClass;