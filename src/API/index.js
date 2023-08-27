const COHORT_NAME = '2302-ACC-ET-WEB-PT-D'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const handleResponse = async (response) => {
    if (!response.ok) {
      const { error } = await response.json();
      throw new Error(error.message);
    }
    return response.json();
  }
  
  export const fetchPosts = async () => {
    const response = await fetch(`${BASE_URL}/posts`);  
    return handleResponse(response);
  }
  
  export const fetchSinglePost = async (postId) => {

    const response = await fetch(`${BASE_URL}/posts/${postId}`);
    const result = await response.json();
    console.log(result)
    return result;
};

  export const registerUser = async (username, password) => {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { username, password } })
    });
    return handleResponse(response);
  }
  
  export const loginUser = async (username, password) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { username, password } })
    });
    return handleResponse(response);
  }
  

  
  export const editPost = async (postId, token, updatedPostDetails) => {
    try {
        const response = await fetch(`${BASE_URL}/posts/${postId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: updatedPostDetails
            })
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const createPost = async (token, post) => {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ post })
        });

        const result = await response.json();
        return result;

    } catch (err) {
        console.error(err);
        throw err;
    }
};

  export const getUserData = async (token) => {
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
        return null;
    }

    
}