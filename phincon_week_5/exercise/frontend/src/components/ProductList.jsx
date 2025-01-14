import { useEffect, useState } from "react";
import { getApiProducts } from "../services/api";
import FormProduct from "./FormProduct";
const ProductList = () => {
  const [products, setProduct] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleForm = () => {
    setIsOpenForm(!isOpenForm);
    console.log(isOpenForm);
  };
  useEffect(() => {
    (async () => {
      console.log(await getApiProducts());
      setProduct(await getApiProducts());
    })();
  }, []);
  return (
    <div className="text-center mt-24">
      <h2>Product List</h2>
      <button onClick={handleForm}>Create Data Product</button>
      {isOpenForm && <FormProduct />}
      <div className="container mx-auto overflow-x-auto mt-7">
        <table className="table w-1/2 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.products?.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>
                  <button>Edit</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
