import React, { useState, useEffect } from 'react';
import { fetchSinglePost } from '../API';
import { useNavigate, useParams } from 'react-router-dom';
import EditPost from './EditPost';
import DeletePostButton from './DeletePost';

const SinglePost = (token) => {
    const [post, setPost] = useState(null);
    const { postId } = useParams();
    const navigate = useNavigate();
    
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

    const handleDelete = (deletedPostId) => {
        console.log(`Post with ID ${deletedPostId} deleted!`);
        navigate('/');
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
            <DeletePostButton postId={post._id} token={token} onPostDeleted={handleDelete} />

        </div>
    );
}

export default SinglePost;
