import React from "react";

export class AboutTextClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:`Welcome to ONDC online food delivery application, where we prioritize fast, reliable, and affordable service. Our platform is designed to provide you with a wide variety of delicious meals at the lowest possible prices. We understand the importance of both quality and cost, which is why we offer low delivery fees without compromising on the speed or trustworthiness of our service. Whether you're craving local favorites or international cuisine, our extensive menu and efficient delivery system ensure that your food arrives hot and fresh, right to your doorstep. Enjoy the convenience and satisfaction of ordering from us, where affordability meets excellence.`
    }
  }

  render() {
    return(
    <div className="text-container">
      <p className="text">{this.state.text}</p>
    </div>
    )
  }

}