// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:5000/blogs"); // useFetch is a custom hook that has useEffect hook

  return (
    <div className="home">
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "yoshi")}
        title="Yoshi's Blogs!"
      /> */}
    </div>
  );
};

export default Home;
