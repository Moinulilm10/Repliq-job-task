import { useState } from "react";

const CustomerForm = ({ onClose }) => {
  const [details, setDetails] = useState([
    { name: "", email: "", phone: "", currency: "" },
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
            type="email"
            placeholder="Email"
            value={detail.email}
            onChange={(e) => handleChange(index, "email", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={detail.phone}
            onChange={(e) => handleChange(index, "phone", e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Currency"
            value={detail.currency}
            onChange={(e) => handleChange(index, "currency", e.target.value)}
            className="p-2 border rounded"
          />
        </div>
      ))}
      <button
        onClick={handleUpdate}
        className="w-full px-4 py-2 mt-10 text-white bg-green-500 rounded"
      >
        Update
      </button>
    </div>
  );
};

export default CustomerForm;
