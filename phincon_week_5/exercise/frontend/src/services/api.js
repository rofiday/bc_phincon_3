const API_URL = "http://localhost:8080/api";

export const getApiProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error("Failed to fetch products");
  return await response.json();
};
