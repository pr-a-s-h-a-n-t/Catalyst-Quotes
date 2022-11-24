import React, { useState } from "react";
import { quotesData } from "./quotesData";
import './App.css';

function App() {

  const[quotetext, setQuotetext] = useState("quotes will display here....")
  const[quoteauthor, setQuoteauthor] = useState("author will display here...")
  function update(){
    setQuotetext(quotesData[Math.floor((Math.random()*quotesData.length))].text)
    setQuoteauthor(quotesData[Math.floor((Math.random()*quotesData.length))].author)
  }

  const[like, setLike] = useState(false);
  const[Save, setSave] = useState(0);

  return (
    <>
      <div id = "heading">

          <h1>Welcom to Quote Store</h1> 
          <h2> { Save } </h2>
      </div>
        <hr />

        <div id="container-card">
          { quotesData.map((ele) => {

            return(



                  <div className="App">
                    
                    <div className="quote"> {ele.text}</div>
                    <div className="author">{ele.author}</div>
                    <button onClick={ () => setLike(!like) } > like </button>
                    { like ? <span>❤️</span> : <span>🤍</span> }
                    <button onClick={ () => {
                      setSave(Save+1)
                    } } > Save </button>
                  </div> 
            )
            
            
          }) }
          </div>
    </>
  );
}

export default App;
