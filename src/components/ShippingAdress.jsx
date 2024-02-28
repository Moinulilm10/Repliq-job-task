import { useState } from "react";

const ShippingAddress = ({ onClose }) => {
  const [details, setDetails] = useState([
    { name: "", contact: "", city: "", country: "" },
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
            placeholder="Name"
            value={detail.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Contact Number"
            value={detail.quantity}
            onChange={(e) => handleChange(index, "contact", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="City"
            value={detail.city}
            onChange={(e) => handleChange(index, "city", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Country"
            value={detail.country}
            onChange={(e) => handleChange(index, "country", e.target.value)}
            className="p-2 border rounded"
          />
        </div>
      ))}
      <button
        onClick={handleUpdate}
        className="w-full px-4 py-2 mt-10 text-white bg-green-500 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default ShippingAddress;
