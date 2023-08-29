import React, { useState, useEffect } from 'react';
import { getUserData } from '../API';

const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUserData(token);
            console.log(result)
            if (result) {
                setUserData(result.data);
            }
        }
        fetchData();
    }, [token]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Welcome, {userData.username}!</h2>
            
            <div className="container">
                <h3>Your Posts:</h3>
                <ul>
                    {userData.posts && userData.posts.map(post => (
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





