// src/components/HomeComponent.js
import React, { Component } from "react";
import "./HomeComponent.css";

class HomeComponent extends Component {
  render() {
    const { onPlay } = this.props;

    return (
      <div className="flex home-container">
        <div>
          <h1>Quiz App</h1>
          <button onClick={onPlay} className="play-button">
            Play
          </button>
        </div>
      </div>
    );
  }
}

export default HomeComponent;