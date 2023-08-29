import { logOut, makeHeaders } from "../components/authUtils";

const COHORT_NAME = "2302-ACC-ET-WEB-PT-D";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const handleResponse = async (response) => {
  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error.message);
  }
  return response.json();
};

// Posts
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const fetchSinglePost = async (postId) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`);
    return handleResponse(response);
  } catch (error) {
    console.error(`Error fetching post with ID ${postId}:`, error);
    throw error;
  }
};

export const editPost = async (postId, token, updatedPostDetails) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: updatedPostDetails,
      }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error editing post with ID ${postId}:`, error);
    throw error;
  }
};

export const deletePost = async (postId, token) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return handleResponse(response);
  } catch (error) {
    console.error(`Error deleting post with ID ${postId}:`, error);
    throw error;
  }
};

export const createPost = async (token, post) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: makeHeaders(),
      body: JSON.stringify({ post }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// Users
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: makeHeaders(),
      body: JSON.stringify({ user: { username, password } }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export async function loginUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: { username, password } }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Login failed");
  }
};

export const getUserData = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: makeHeaders(),
    });

    if (response.status === 401) {
      console.error("Token is unauthorized or expired.");
      logOut();
      return null;
    }

    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
