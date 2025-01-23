/* eslint-disable react/prop-types */
import Modal from "react-modal";
import { deleteProduct, getProducts } from "../services/api";
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
const DeleteForm = ({
  setModalDeleteIsOpen,
  modalDeleteIsOpen,
  setProducts,
  data,
}) => {
  const closeModal = () => {
    setModalDeleteIsOpen(!modalDeleteIsOpen);
  };
  return (
    <div>
      <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" w-[500px] flex flex-col">
          <div className="flex flex-row justify-between items-center mb-5">
            <h3 className="text-2xl uppercase font-thin tracking-tighter">
              Delete
            </h3>
            <button
              onClick={() => setModalDeleteIsOpen(false)}
              className="text-4xl"
            >
              &times;
            </button>
          </div>
          <h1 className="text-center font-bold text-2xl">
            Are u sure Delete this Data?
          </h1>
          <div className="flex justify-center items-center gap-5 my-10">
            <button className="btn btn-error text-md">No</button>
            <button
              className="btn btn-success text-md"
              onClick={async () => {
                console.log("kliked");
                const response = await deleteProduct(data.id);
                if (response.status === "success") {
                  const products = await getProducts();
                  setProducts(products);
                  setModalDeleteIsOpen(false);
                }
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteForm;
