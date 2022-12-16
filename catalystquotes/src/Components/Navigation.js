import React from "react";
import "./Navigation.css";

function Navigation({Save, handleChange, search , setSearch }) {
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
      {/* <div className="searchBar">
        <input 
        value={search}
        type="text"
        placeholder="Author name"
        onChange={handleChange}
        />
        <button id="btn"
        onClick={() => {
           setSearch("")
        }}
        >Clear Search</button>

      </div> */}

      <h2 className="saved-container">
        <span className="saved-icon">
          Saved { Save ? <span>❤️</span> : <span>🤍</span>}
        </span>
        <span className="saved-count">{ Save}</span>
      </h2>
    </nav>
  );
}

export default Navigation;
