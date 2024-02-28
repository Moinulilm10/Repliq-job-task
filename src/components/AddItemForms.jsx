import { useState } from "react";

const AddItemForm = ({ onClose }) => {
  const [details, setDetails] = useState([
    { product_name: "", quantity: "", color: "", size: "" },
  ]);

  const handleChange = (index, field, value) => {
    const newDetails = [...details];
    newDetails[index][field] = value;
    setDetails(newDetails);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="p-10">
      {details.map((detail, index) => (
        <div key={index} className="flex flex-col gap-4 mb-4">
          <input
            type="text"
            placeholder="Product"
            value={detail.product_name}
            onChange={(e) =>
              handleChange(index, "product_name", e.target.value)
            }
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Quantity"
            value={detail.quantity}
            onChange={(e) => handleChange(index, "quantity", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Color Variations"
            value={detail.color}
            onChange={(e) => handleChange(index, "color", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Size"
            value={detail.size}
            onChange={(e) => handleChange(index, "size", e.target.value)}
            className="p-2 border rounded"
          />
        </div>
      ))}
      <button
        onClick={handleUpdate}
        className="w-full px-4 py-2 mt-10 text-white bg-green-500 rounded"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItemForm;
