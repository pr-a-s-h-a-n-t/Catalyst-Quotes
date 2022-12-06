// import React, { useState,useEffect } from 'react';
import { quotesData } from "../quotesData";
import Card from "./Card";
import "./Home.css";

function Home({ setSave, save }) {
  // const[newData, setData] = useState([{}]);

  // useEffect(() => {

  //      const Data = quotesData.filter((data, id) =>{
  //         return (  data[id].author.length !== 0);
  //     })
  //     setData((prev) => {
  //         return [{...prev, Data}];
  //     })
  // }, []);
  // console.log(newData)

  return (
    <div className="box">
      <div className="box-header">
        <p>
          {" "}
          WELCOME TO CATALYST QUOTES <span> 🚀</span>{" "}
        </p>
      </div>
      {quotesData.map((data, i) => {
        return <Card data={data} key={i} setSave={setSave} save={save} />;
      })}
    </div>
  );
}

export default Home;
