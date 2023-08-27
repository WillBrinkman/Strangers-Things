import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../API';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const data = await fetchPosts();
      console.log(data);
      setPosts(data.data.posts);
    }
    getPosts();
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>Info: {post.description}</p>
          <p>Price: {post.price}</p>
          <p>{post.location}</p>
          <p>Listed By {post.author.username}</p>

        </div>
      ))}
    </div>
  );
}

export default Posts;
