import { hot } from "react-hot-loader/root";
import "../theme/style.css";
import React, { PureComponent } from "react";
import { render } from "react-dom";

class Ok extends PureComponent {
  render() {
    return <h1>Hello 11!!</h1>;
  }
}

const Test = hot(Ok);

render(<Test />, document.getElementById("root"));
