import React, { Component } from "react";

class Tooltip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={this.props.tooltipClasses}>
          <p>{this.props.tooltip}</p>
        </div>
      </div>
    );
  }
}

export default Tooltip;
