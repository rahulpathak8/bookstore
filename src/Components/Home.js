import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/logo2.png";
import CardComponent from "./CardComponent";
import "./Home.css";

import { FiSearch } from "react-icons/fi";
function Home() {
  const [filteredList, setFilteredList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/rahulpathak8/Book-Store/db")
      .then((res) => res.json())
      .then(
        (result) => {
          setBookList(result.books);
          setFilteredList(result.books);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  useEffect(() => {
    if (value === "") {
      setFilteredList(bookList);
    }
  }, [value]);
  console.log("---->", bookList);
  const inputHandler = (e) => {
    setValue(e.target.value);
    searchHandler();
  };

  const searchHandler = () => {
    const data = bookList.filter((books) => {
      if (books.author.toLowerCase().match(value.toLowerCase()))
        return books.author.toLowerCase().includes(value.toLowerCase());
      else if (books.title.toLowerCase().match(value.toLowerCase()))
        return books.title.toLowerCase().includes(value.toLowerCase());
      else if (books.price.toLowerCase().match(value.toLowerCase()))
        return books.price.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredList(data);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          marginBottom: "12px",
        }}
      >
        <div>
          {" "}
          <img src={logo} />
          <div className="welcome-txt">Welcome to our Book Store</div>
        </div>
        <div className="icon search-box">
          <input placeholder="Filter" onChange={(e) => inputHandler(e)}></input>
          <button className="searchBtn" onClick={searchHandler}>
            <FiSearch></FiSearch>
          </button>
          <div className="searchText">
            search by book title,author name and price
          </div>
        </div>
      </div>
      <div>
        <CardComponent data={filteredList} />
      </div>
    </div>
  );
}

export default Home;
