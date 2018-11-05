import React from "react";
import { Link } from "react-router";

export default class Blank extends React.Component {
  render() {
    return <div className="appWrapper">{this.props.children}</div>;
  }
}
