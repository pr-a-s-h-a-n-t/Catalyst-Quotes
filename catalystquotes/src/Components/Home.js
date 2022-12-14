import React, { useState, useEffect } from "react";
import { quotesData } from "../quotesData";
import Card from "./Card";
import "./Home.css";

function Home({ search, setSave, save }) {
  const [newData, setData] = useState([{}]);
  const [searchData, setSearchData] = useState([{}]);

  const [show, setShow] = React.useState(false);

  const [quotePerPage, setquotePerPage] = useState([9]);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfTotalPages = Math.ceil(newData.length / quotePerPage);
  const pages = [...Array(numberOfTotalPages + 1).keys()].slice(1);

  const indexOfLastquote = currentPage + quotePerPage;
  const indexOfFirstquote = indexOfLastquote - quotePerPage;

  const visiblequote = newData.slice(indexOfFirstquote, indexOfLastquote);

  useEffect(() => {
    const Data = quotesData.filter((data, id) => {
      return data.author !== null  ;
    });
    setData(Data);

    // const filteredcryptoData = quotesData.filter(quotes => quotes.author.toLowerCase().includes(search.toLowerCase()));
    // setSearchData(filteredcryptoData)
    
    
  }, [ ]);
  // console.log(newData)

//   console.log(filteredcryptoData)


  return (
    <div className="box">
      <div className="box-header">
        <p>
          {" "}
          WELCOME TO CATALYST QUOTES <span> 🚀</span>{" "}
        </p>
      </div>
      {/* { newData || searchData ? searchData.map((data, i) => {
        return <Card data={data} key={i} setSave={setSave} save={save} />;})  :  */}
       { newData.map((data, i) => {
        return <Card data={data} key={i} setSave={setSave} save={save} />;
      }) }
      {/* {  visiblequote.map((data, i) => {
        return <Card data={data} key={i} setSave={setSave} save={save} />;
      })} */}
      <h1 className="page-link">
        {pages.map((page) => {
          return (
            <span
              key={page}
              onClick={() => {
                setCurrentPage(page);
              }}
              className={`${currentPage === page ? "active" : ""}`}
            >{`|${page} `}</span>
          );
        })}
      </h1>
    </div>
  );
}

export default Home;
