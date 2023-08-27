import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../API';
import SinglePost from './SinglePost';

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
                    <Link to={`/post/${post._id}`}>
                        <h2>{post.title}</h2>
                    </Link>
          <p>Info: {post.description}</p>
          <p>Price: ${post.price}</p>
          <p>{post.location}</p>
          <p>Listed By {post.author.username}</p>

        </div>
      ))}
    </div>
  );
}

export default Posts;
