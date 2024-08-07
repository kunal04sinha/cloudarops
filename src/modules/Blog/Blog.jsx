import React from "react";
import useBlog from "./useBlog";
import BlogNotFound from "./components/BlogNotFound";

const Blog = () => {
  const { blogContent, isValidBlog } = useBlog();

  if (!isValidBlog) {
    return <BlogNotFound />;
  }

  return (
    <div>
      <div className="w-full">
        {blogContent.map((content, index) =>
          content.type === "banner" ? (
            <div key={index}>{content.component}</div>
          ) : null
        )}
      </div>

      <div className="max-w-7xl mx-auto p-6 bg-white ">
        {blogContent.map((content, index) =>
          content.type !== "banner" ? (
            <div key={index}>{content.component}</div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Blog;
