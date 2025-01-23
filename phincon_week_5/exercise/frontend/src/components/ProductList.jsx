/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
const ProductList = ({
  setModalIsOpen,
  products,
  setData,
  setMode,
  setModalDeleteIsOpen,
}) => {
  const columns = [
    {
      name: "No",
      selector: (row, index) => index + 1,
      width: "50px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      wrap: true,
      width: "168px",
    },
    {
      name: "Price",
      selector: (row) => row.price,
      width: "168px",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      width: "168px",
    },
    {
      name: "Stock",
      selector: (row) => row.stock,
      width: "168px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-1 items-center">
          <button
            onClick={() => {
              setData(row);
              console.log("Edit", row);
              setModalIsOpen(true);
              setMode("update");
            }}
            className="bg-green-600 py-1 px-2 rounded-sm tracking-wide min-w-24"
          >
            Edit
          </button>
          <button
            onClick={() => {
              setData(row);
              setModalDeleteIsOpen(true);
            }}
            className="bg-red-600 py-1 px-2 rounded-sm tracking-wide min-w-24"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="cointainer mx-auto w-[80%] mt-10 ">
      <div className="flex flex-col">
        <h1>Product List</h1>
        <div className="flex justify-between my-2 items-center">
          <button
            className="bg-blue-500 text-white py-2 px-2 rounded-sm"
            onClick={() => {
              setModalIsOpen(true);
              setMode("create");
            }}
          >
            + Create Product
          </button>
          <h3>Total Product: {products.length}</h3>
        </div>
        <DataTable
          columns={columns}
          data={products}
          pagination
          responsive
          className="text-center"
        />
      </div>
    </div>
  );
};

export default ProductList;
