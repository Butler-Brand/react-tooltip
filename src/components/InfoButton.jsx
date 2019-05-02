import React, { Component } from "react";
import Tooltip from "./Tooltip";

class InfoButton extends Component {
  constructor(props) {
    super(props);

    //external handlers
    this.setExternal = this.setExternal.bind(this);
    this.handleExternal = this.handleExternal.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleExternal);
  }

  render() {
    return (
      <div ref={this.setExternal} className="infoButton">
        <Tooltip
          tooltip={this.props.tooltip}
          tooltipClasses={this.props.tooltipClasses}
        />
        <button
          type="button"
          className="btn btn-secondary"
          id={this.props.id}
          title={this.props.text}
        >
          {this.props.text}
        </button>
      </div>
    );
  }

  setExternal(x) {
    this.external = x;
  }

  handleExternal(e) {
    const { alterState } = this.props;
    if (this.external && !this.external.contains(e.target)) {
      if (e.target.id === "" || e.target.id === undefined)
        alterState("outside");
    } else {
      alterState(this.props.id);
    }
  }
}

export default InfoButton;
