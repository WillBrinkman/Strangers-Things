import React, { useState, useEffect } from 'react';

// Import the API calls
import { getUserData } from '../API';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem('userToken');  // Assuming you store the token in localStorage

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserData(token);
            if (data) {
                setUserData(data);
            }
        }
        fetchData();
    }, [token]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile">
            <h2>Welcome, {userData.username}!</h2>
            
            <div className="user-posts">
                <h3>Your Posts:</h3>
                <ul>
                    {userData.posts.map(post => (
                        <li key={post._id}>
                            <strong>{post.title}</strong>: {post.description}
                            <br />
                            Price: {post.price}
                            <br />
                            Messages: 
                            <ul>
                                {post.messages.map(message => (
                                    <li key={message._id}>
                                        From {message.fromUser.username}: {message.content}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default UserProfile;





