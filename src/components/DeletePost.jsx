import React from 'react';
import { deletePost } from '../API';

const DeletePostButton = ({ postId, token, onPostDeleted }) => {

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            const result = await deletePost(postId, token);
            if (result.success) {
                onPostDeleted(postId);
            }
        }
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    );
}

export default DeletePostButton;
