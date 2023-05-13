import React, { useState } from "react";
import Article from "../components/blog_articles";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchKeyword, setSearchKeyword] = useState(""); // 1. 添加 searchKeyword 變數
  const [clickSearch, setClickSearch] = useState("");
  const onSearch = (searchTerm: string) => {
    console.log("search", searchTerm);
    setClickSearch(searchTerm);
  };
  return (
    <div className="blog_container">
      <div className="blog_topBar">
        <div className="searchBar">
          <input
            className="searchInput"
            type="text"
            placeholder="Serach keyword"
            onChange={(e) => setSearchKeyword(e.target.value)} // 2. 監聽 input 的值
            value={searchKeyword} // 將 state 中的 searchKeyword 值賦予 input
          />
          <button
            className="searchButton"
            onClick={() => onSearch(searchKeyword)}
          >
            Search
          </button>
        </div>

        <div className="blog_filters">
          <button
            className="blog_filter"
            onClick={() => {
              onSearch(""); // 相當於input無輸入值並按下Search button，就會顯示全部文章
              setSearchKeyword(""); // 將input 中的輸入值清空
              setSelectedFilter(""); // 將已經透過filter button 篩選的值清空，就會顯示全部文章
            }}
          >
            All
          </button>
          <button
            className="blog_filter"
            onClick={() => setSelectedFilter("Algorithms")}
          >
            Algorithms
          </button>
          <button
            className="blog_filter"
            onClick={() => setSelectedFilter("Leetcode")}
          >
            LeetCode
          </button>
          <button
            className="blog_filter"
            onClick={() => setSelectedFilter("Full Stack")}
          >
            Full Stack
          </button>
          <button
            className="blog_filter"
            onClick={() => setSelectedFilter("Front End")}
          >
            Front End
          </button>
          <button
            className="blog_filter"
            onClick={() => setSelectedFilter("Back End")}
          >
            Back End
          </button>
        </div>
      </div>
      <div className="blogZone">
        {Article.card
          .filter(
            (item) => selectedFilter === "" || item.theme === selectedFilter
          )
          .filter((item) =>
            item.title.toLowerCase().includes(clickSearch.toLowerCase())
          )
          .map((item) => {
            return (
              <Link
                to={{
                  pathname: `/blog/post/${item.id}`,
                }}
                state={{
                  date: item.date,
                  title: item.title,
                  content: item.content,
                }} //React Router V6 之後 state 不再是寫在 to 裡面，而是寫在外面
              >
                <div className="post" key={item.id}>
                  <div className="blog_titles">{item.title}</div>
                  <div className="blog_contents">{item.content}</div>
                  <div className="blog_dates">{item.date}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
