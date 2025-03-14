import axios from "axios";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post("/api/login", { username, password });
    return response.data.token;
  } catch (error) {
    throw new Error("Invalid username or password");
  }
};
