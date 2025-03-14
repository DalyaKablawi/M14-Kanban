// client/src/api/authAPI.js
import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    return response.data.token;
  } catch (error) {
    throw new Error("Invalid username or password");
  }
};
