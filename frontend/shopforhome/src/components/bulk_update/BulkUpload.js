import { useState } from "react";
import Papa from "papaparse";
import UploadedProducts from "./UploadedProducts";
import axios from "axios";
const BulkUpload = () => {
  //State to store the values
  const [products, setProducts] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        // Parsed Data Response in array format
        setProducts(results.data);
      },
    });
  };

  const handleOnClick = () => {
    axios
      .post("http://localhost:3001/bulkupdate", products)
      .then((response) => {
        if (response?.status === 200) {
        //   setResponse(response?.data?.message);
        }
      });
  };
  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
      <button onClick={handleOnClick}>Upload Products</button>
      <br />
      <br />
      {/* Table */}
      <UploadedProducts products={products} />
    </div>
  );
};

export default BulkUpload;
