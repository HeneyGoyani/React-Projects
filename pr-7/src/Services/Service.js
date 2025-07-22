export const getStorageData = () => {
  return JSON.parse(localStorage.getItem("Products")) || [];
};

export const setStorageData = (data) => {
  localStorage.setItem("Products", JSON.stringify(data));
};