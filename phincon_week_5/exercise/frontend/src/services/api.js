const API_URL = "http://localhost:8080/api";

export const getProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    const json = await response.json();
    return json?.products;
  } catch (error) {
    console.error(error.message);
    throw error(error.message);
  }
};

export const createProduct = async (products) => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });
    //validasi
    if (!response) throw new Error("Failed to create product");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (id, products) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    });
    console.log(response);
    if (!response.ok) throw new Error("failed to update Products");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};

export const deleteProduct = async (id) => {
  console.log(id);
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to Delete Product");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
};
