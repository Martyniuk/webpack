import { hot } from "react-hot-loader/root";
import "../theme/style.css";
import Styles from "./styles.css";
import React, { PureComponent } from "react";
import { render } from "react-dom";

class Ok extends PureComponent {
  render() {
    return (
      <>
        <h1 className={Styles.hello}>Hello 111!!</h1>
        <h1 className={Styles.hello}>Hello 11!!</h1>
      </>
    );
  }
}

const Test = hot(Ok);

render(<Test />, document.getElementById("root"));
