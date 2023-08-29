import React, { useState, useEffect } from 'react';
import { editPost } from '../API';

const EditPost = ({ postId, token, initialData, onPostUpdated }) => {
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedPost = await editPost(postId, formData, token);
        if (updatedPost) {
            onPostUpdated(updatedPost);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" value={formData.title} onChange={handleInputChange} />
            <button type="submit">Update Post</button>
        </form>
    );
}

export default EditPost;