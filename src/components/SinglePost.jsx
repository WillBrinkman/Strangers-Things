import React, { useState, useEffect } from 'react';
import { fetchSinglePost } from '../API';
import { useParams } from 'react-router-dom';
import EditPost from './EditPost';
const SinglePost = (token) => {
    const [post, setPost] = useState(null);
    const { postId } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSinglePost(postId);
            setPost(data);
        };
        fetchData();
    }, [postId]);

    const handleUpdate = (updatedPost) => {
        setPost(updatedPost);
    };
    if (!post) {
        return <div>Loading...</div>; 
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <EditPost postId={post._id} token={token} initialData={post} onPostUpdated={handleUpdate} />
        </div>
    );
}

export default SinglePost;
