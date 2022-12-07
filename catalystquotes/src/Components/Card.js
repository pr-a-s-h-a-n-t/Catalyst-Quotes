import React from "react";
// import {quotesData} from '../quotesData'

import "./Card.css";

function Card({ data, setSave, save }) {
  const [show, setShow] = React.useState(false);

  const { text, author } = data;

  return (
    <div className="App">
      {show ? (
        <span className="saved">
          <p>saved</p>
        </span>
      ) : (
        ""
      )}

      <div className="quote"> {text}</div>

      <div className="author-btn">
        {show === false ? (
          <button
            className="app-btn"
            onClick={() => {
              setShow(!show);
              if (show !== true) {
                setSave((prev) => prev + 1);
              } else {
                setSave((prev) => prev - 1);
              }
            }}
          >
            SAVE
          </button>
        ) : (
          <button
            className="app-btn"
            onClick={() => {
              setShow(!show);
              if (show !== true) {
                setSave((prev) => prev + 1);
              } else {
                setSave((prev) => prev - 1);
              }
            }}
          >
            UNSAVE
          </button>
        )}
        <div className="author">{author}</div>
      </div>
    </div>
  );
}

export default Card;
