
export function loginUser(username, password) {
  console.log("Logging in user:", username);
  return username === "admin" && password === "password";
}

export function logoutUser() {
  console.log("Logging out user...");
}

export function isAuthenticated() {
  return localStorage.getItem("authToken") !== null;
}
