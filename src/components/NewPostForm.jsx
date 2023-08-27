import React, { useState } from 'react';

import React, { useState } from 'react';
import { createPost } from './api/posts';  // Update the path to the actual path to the API function

const NewPostForm = ({ token, onPostCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const postData = {
                title,
                description,
                price,
                location,
                willDeliver
            };

            const result = await createPost(token, postData);

            if (result.success) {
                onPostCreated(result.data.post);
            } else {
                console.error(result.error);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Price:</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
                <label>Location:</label>
                <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="On Request" />
            </div>
            <div>
                <label>Will Deliver:</label>
                <input type="checkbox" checked={willDeliver} onChange={() => setWillDeliver(!willDeliver)} />
            </div>
            <div>
                <button type="submit">Create Post</button>
            </div>
        </form>
    );
};

export default NewPostForm;
