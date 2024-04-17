export const removeUserFromLocalStorage = () => {
  try {
    localStorage.removeItem("username");
    localStorage.removeItem("access_token");
    localStorage.removeItem("image");
    localStorage.removeItem("persist:root");
    return true;
  } catch (error) {
    console.error("Error removing user from local storage:", error);
    return false;
  }
};
