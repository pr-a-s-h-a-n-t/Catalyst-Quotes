import React, { useState } from "react";

import "./App.css";

// import Card from './Components/Card';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
// import { quotesData } from "./quotesData";

function App() {
  const [Save, setSave] = useState(0);
  const [search, setSearch] =  useState('');


  const handleChange = e => {
    setSearch(e.target.value);
  };

//   const filteredcryptoData = quotesData.filter(quotes =>
//     quotes.author.toLowerCase().includes(search.toLowerCase())
// );

console.log(search);

  return (
    <>
      <Navigation 
      Save={Save}
      handleChange={handleChange}
      search={search}
      setSearch={setSearch}

      />
      <Home 
      // filteredcryptoData={filteredcryptoData}
      search={search}

      setSave={setSave} Save={Save} />
      {/* <Card setSave = { setSave} value= {Save } id = { id }/> */}
      <Footer />
    </>
  );
}

export default App;
