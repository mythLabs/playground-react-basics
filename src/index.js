import React from "react";
import reactDOM from "react-dom";
import SeasonDisplay from'./SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: "" }; //thanks babel


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <div>Loadin!</div>;
  }
}

reactDOM.render(<App />, document.querySelector("#root"));
