export function Logout() {
  const removeToken = (isAuthenticated) => {
    localStorage.removeItem("access_token");
    console.log("signed out");
  };
}
