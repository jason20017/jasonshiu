import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; //更改網頁title 名稱
import Navi from "./components/Navi";
import Home from "./pages/Home";
import About from "./pages/About";
import Exp from "./pages/Exp";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/blog";
import Single from "./pages/Single";
import "./styles/style.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jason Shiu Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navi />
      <Routes>
        <Route path="/jasonshiu" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/exp"
          element={
            <Exp
              imgSrc={undefined}
              desc={""}
              src={""}
              jobTitle={""}
              company={""}
            />
          }
        ></Route>
        <Route path="/port" element={<Portfolio />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/post/:postId" element={<Single />}></Route>
      </Routes>
    </div>
  );
};

export default App;
