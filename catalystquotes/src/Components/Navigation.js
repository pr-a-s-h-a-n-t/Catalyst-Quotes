import React from "react";
import "./Navigation.css";

function Navigation(props) {
  return (
    <nav className="navigation">
      <h1>
        Catalyst <br />
        &nbsp; &nbsp; 🥇 Quotes
      </h1>
      <div className="nav-links">
        <ul>
          <li> Home </li>
          <li> Authors </li>
          <li> Profile </li>
          <li> Login/SignUp </li>
          
        </ul>
      </div>
      <div className="searchBar">
        <input 
        type="text"
        placeholder="Author name"
        />
        <button
        onClick={() => {}}
        >Search</button>

      </div>

      <h2 className="saved-container">
        <span className="saved-icon">
          Saved {props.value ? <span>❤️</span> : <span>🤍</span>}
        </span>
        <span className="saved-count">{props.value}</span>
      </h2>
    </nav>
  );
}

export default Navigation;
