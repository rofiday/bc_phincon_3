/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { getProducts, createProduct, updateProduct } from "../services/api";
import toast from "react-hot-toast";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const ProductForm = ({
  modalIsOpen,
  setModalIsOpen,
  setProducts,
  data,
  setData,
  mode,
}) => {
  function closeModal() {
    setModalIsOpen(false);
  }
  const handleForm = async (e) => {
    e.preventDefault();
    const product = {
      name: data.name,
      price: data.price,
      category: data.category,
      stock: data.stock,
    };

    let response;
    if (
      data.name === "" ||
      data.price === "" ||
      data.category === "" ||
      data.stock === ""
    ) {
      toast.error("Please fill all  the fields");
      return;
    }
    console.log(mode);
    if (mode === "create") {
      response = await createProduct(product);
    } else if (mode === "update") {
      response = await updateProduct(data.id, product);
    }

    if (response.status === "success") {
      const products = await getProducts();
      setProducts(products);
      toast.success(response.message);
    }

    setModalIsOpen(false);
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" w-[500px] flex flex-col">
          <div className="flex flex-row justify-between items-center mb-5">
            <h3 className="text-2xl uppercase font-thin tracking-tighter">
              {mode === "create" ? "create" : "update"} Product
            </h3>
            <button onClick={() => setModalIsOpen(false)} className="text-4xl">
              &times;
            </button>
          </div>
          <form className="">
            <div className="form-group">
              <div className="my-2">
                <label htmlFor="name">Name :</label>
              </div>
              <div>
                <input
                  type="text"
                  id="name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-full p-1 border-2 border-black rounded-md"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="my-2">
                <label htmlFor="name">Price :</label>
              </div>
              <div>
                <input
                  type="number"
                  value={data.price}
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                  className="w-full p-1 border-2 border-black rounded-md"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="my-2">
                <label htmlFor="name">Category :</label>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  onChange={(e) =>
                    setData({ ...data, category: e.target.value })
                  }
                  className="w-full border-2 border-black p-1 rounded-md"
                  value={data.category}
                >
                  <option value="">Select Category</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Parfume">Parfume</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="my-2">
                <label htmlFor="name">Stock :</label>
              </div>
              <div>
                <input
                  type="number"
                  id="name"
                  value={data.stock}
                  onChange={(e) => setData({ ...data, stock: e.target.value })}
                  className="w-full p-1 border-2 border-black rounded-md"
                />
              </div>
            </div>
            <button
              className="bg-sky-500 mt-3 w-full py-1 text-lg rounded-md text-white"
              type="submit"
              onClick={handleForm}
            >
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProductForm;
