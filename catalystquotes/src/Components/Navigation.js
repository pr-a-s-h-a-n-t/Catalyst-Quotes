import React from "react";
import "./Navigation.css";

function Navigation(props) {
  return (
    <nav className="navigation">
      <h1>
        Catalyst <br />
        &nbsp; &nbsp; 🥇 Quotes
      </h1>

      <h2 className="saved-container">
        <span className="saved-icon">
          {props.value ? <span>❤️</span> : <span>🤍</span>}
        </span>
        <span className="saved-count">{props.value}</span>
      </h2>
    </nav>
  );
}

export default Navigation;
