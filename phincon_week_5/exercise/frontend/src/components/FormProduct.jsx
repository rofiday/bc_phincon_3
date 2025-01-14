const FormProduct = () => {
  return (
    <div>
      <h1>Form Product</h1>
      <form action="">
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <td>
                <input type="text" placeholder="Product Name" />
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td>
                <input type="number" placeholder="Product Price" />
              </td>
            </tr>
            <tr>
              <th>Category</th>
              <td>
                <input type="text" placeholder="Product Category" />
              </td>
            </tr>
            <tr>
              <th>Stock</th>
              <td>
                <input type="number" placeholder="Product Stock" />
              </td>
            </tr>
          </thead>
        </table>
      </form>
    </div>
  );
};

export default FormProduct;
