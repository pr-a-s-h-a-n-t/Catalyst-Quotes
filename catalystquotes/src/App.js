import React, { useState } from "react";

import "./App.css";

// import Card from './Components/Card';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";

function App() {
  const [Save, setSave] = useState(0);

  return (
    <>
      <Navigation value={Save} />
      <Home setSave={setSave} Save={Save} />
      {/* <Card setSave = { setSave} value= {Save } id = { id }/> */}
      <Footer />
    </>
  );
}

export default App;
