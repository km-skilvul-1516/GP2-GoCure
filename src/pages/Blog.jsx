import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import useFetchArticle from "../services/articleApi";
import {LoadingPage} from "./LoadingPage"

const Blog = () => {
  const { article } = useFetchArticle();
  console.log("article", article);
  
  //  loading
  if(article == null){
    return (
      <LoadingPage/>
    )
  }

  return (
    <div>
      <div className="flex justify-center gap-x-4 md:gap-x-8 px-3 sm:px-4 lg:px-40 xl:px-60 2xl:px-96 py-3">
        <div className="pr-10 md:pr-16 lg:pr-0 w-full">
          <Header 
            name="Blogs" 
            pic="blog-header.svg" 
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-2 md:gap-y-4">
            {article &&
              article.map((art) => (
                <Card
                  key={art.Id}
                  title={art.Title}
                  image={art.ImageUrl}
                  id={art.Id}
                  category="blogs"
                  page="blogsPage"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="sidebar flex items-center pr-1 md:pr-6 lg:pr-24 xl:pr-44 py-40 xl:py-64">
        <Navbar />
      </div>
    </div>
  );
};

export default Blog;
