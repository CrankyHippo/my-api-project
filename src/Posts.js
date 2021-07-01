import React, {useState} from "react";
import axios from "axios";
import userPost from "./user";

function Posts() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data));
  }, []);

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li className="post" key={post.id}>
          <h2>Post #{post.id}</h2>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          
        </li>
      ))}
    </ul>
  );
}

export default Posts;
