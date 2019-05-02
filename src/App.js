import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import InfoButton from "./components/InfoButton";

class App extends Component {
  state = {
    activeButton: "",
    button1ID: "InfoButton1",
    button1Text: "Button A",
    button1TooltipText: "First Tooltip, TEXT A",
    tooltip1Classes: "tool invisible",
    button2ID: "InfoButton2",
    button2Text: "Button B",
    button2TooltipText: "Second Tooltip, TEXT B",
    tooltip2Classes: "tool invisible"
  };

  constructor() {
    super();
    this.alterState = this.alterState.bind(this);
    this.detectEscape = this.detectEscape.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.detectEscape);
  }

  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-sm-6 mb-2">
              <InfoButton
                id={this.state.button1ID}
                text={this.state.button1Text}
                tooltip={this.state.button1TooltipText}
                alterState={this.alterState}
                tooltipClasses={this.state.tooltip1Classes}
              />
            </div>
            <div className="col-sm-6 mb-2">
              <InfoButton
                id={this.state.button2ID}
                text={this.state.button2Text}
                tooltip={this.state.button2TooltipText}
                alterState={this.alterState}
                tooltipClasses={this.state.tooltip2Classes}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  detectEscape(e) {
    if (e.keyCode === 27) {
      this.clearTooltips();
    }
  }

  clearTooltips() {
    this.setState({
      activeButton: "",
      tooltip1Classes: "tool invisible",
      tooltip2Classes: "tool invisible"
    });
  }

  alterState(id) {
    //current click is already the active state. Do nothing.
    if (this.state.activeButton === id) {
      return;
    }

    //click was outside. Turn off everything
    if (id === "outside") {
      this.clearTooltips();
      return;
    }

    //If there is no active button, make the id the active button and we're done
    if (this.state.activeButton === "") {
      if (id === this.state.button1ID)
        this.setState({ activeButton: id, tooltip1Classes: "tool visible" });
      else this.setState({ activeButton: id, tooltip2Classes: "tool visible" });

      //other button has been activated. Turn off old tooltip and turn on new one
    } else {
      if (id === this.state.button1ID)
        this.setState({
          activeButton: id,
          tooltip1Classes: "tool visible",
          tooltip2Classes: "tool invisible"
        });
      else
        this.setState({
          activeButton: id,
          tooltip2Classes: "tool visible",
          tooltip1Classes: "tool invisible"
        });
    }
  }
}

export default App;
