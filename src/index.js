import React from "react";
import ReactDOM from "react-dom";

import MyImage from './assets/tesla.jpeg';
import './index.css';

const App = () => {
  return (
    <div styleName="container">
      <h2>Hey Yo! Webpack is working!</h2>
      <h3>Here's <a href="https://en.wikipedia.org/wiki/Nikola_Tesla">Nikola Tesla</a> pic</h3>
      <img src={MyImage} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
