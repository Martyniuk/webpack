// Core
import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";

// Styles
import Styles from "./styles.css";
import cat from "../../theme/images/kitty.jpg";

// Components
import { Button } from "../Button";

// import { log } from '../helpers'

const SkillMeter = hot(module)(
  class extends Component {
    state = {
      skill: 0
    };

    inc = () =>
      this.setState(({ skill }) => ({
        skill: skill + 1
      }));

    dec = () =>
      this.setState(({ skill }) => ({
        skill: skill - 1
      }));

    render() {
      const { skill } = this.state;

      return (
        <section className={Styles.skillMeter}>
          <h1>My webpack skill: {skill}</h1>
          <img src={cat} />
          <div>
            <Button text="Increment" onClick={this.inc} />
            <Button text="Decrement" onClick={this.dec} />
          </div>
        </section>
      );
    }
  }
);

render(<SkillMeter />, document.getElementById("app"));
