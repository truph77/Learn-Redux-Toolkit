import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <div className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </div>
  ));

  return (
    <section className="post-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
