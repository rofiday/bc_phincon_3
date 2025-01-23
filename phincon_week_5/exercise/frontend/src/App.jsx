import ProductList from "./components/ProductList";
import ProductFrom from "./components/ProductForm";
import { useState, useEffect } from "react";
import { getProducts } from "./services/api";
import { Toaster } from "react-hot-toast";
import DeleteForm from "./components/DeleteForm";
const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [mode, setMode] = useState("create");
  const [data, setData] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    category: "",
  });
  useEffect(() => {
    (async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    })();
  }, []);
  return (
    <>
      <ProductList
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        products={products}
        setProducts={setProducts}
        setData={setData}
        setMode={setMode}
        setModalDeleteIsOpen={setModalDeleteIsOpen}
      />
      <DeleteForm
        modalDeleteIsOpen={modalDeleteIsOpen}
        setModalDeleteIsOpen={setModalDeleteIsOpen}
        products={products}
        setProducts={setProducts}
        data={data}
        setData={setData}
      />
      <ProductFrom
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        products={products}
        setProducts={setProducts}
        data={data}
        setData={setData}
        mode={mode}
      />
      <Toaster position="top-right" />
    </>
  );
};

export default App;
