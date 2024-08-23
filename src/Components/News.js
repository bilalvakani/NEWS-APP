
import { useEffect, useState } from "react";
import "../Components/News.css";
import { Card } from "./Card.js";

export const News = () => {
  const [search, setSearch] = useState("pakistan");
  const [newsData, setNewsData] = useState();

  const apiKey = "d72fc98cd8c74550bfe27ddca13624f8";

  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`);
    const json = await response.json();
    console.log(json.articles);
    setNewsData(json.articles);
  }

  useEffect(()=>{
    getData()
  },[])


  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const useInput =(event)=>{
    setSearch(event.target.value)
  }
  return (
    <div className="news-container">
      <nav className="navbar">
        <div className="logo">
          <h1> MB Shugal News</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">ALL NEWS</a></li>
          <li><a href="#">Trending news</a></li>
        </ul>
        <div className="search-bar">
          <input className="text" placeholder="Search News" value={search} onChange={handleInput} />
          
          <button onClick={getData}>
  <i className="fas fa-search"></i> Search
</button>

        </div>
        
      </nav>
      
      <div className="category-buttons">
        <button className="bt" onClick={useInput} value="sports">Sports</button>
        
        <button className="bt" onClick={useInput} value="entertainment">Entertainment</button>
        <button className="bt" onClick={useInput} value="fitness">Fitness</button>
        <button className="bt" onClick={useInput}value="health">Health</button>
      </div>
      <div>
         {newsData?
        <Card data={newsData} />:null}
      </div>
    </div>
  );
};
