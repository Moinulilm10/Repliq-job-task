import { useState } from "react";

const NoteKeeping = ({ onClose }) => {
  const [details, setDetails] = useState([{ note: "", date: "" }]);

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
          <textarea
            type="text"
            placeholder="Take notes"
            value={detail.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
            className="h-32 p-2 border rounded"
          />
          <input
            type="date"
            placeholder="Date"
            value={detail.date}
            onChange={(e) => handleChange(index, "date", e.target.value)}
            className="p-2 border rounded"
          />
          {/* <input
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
          /> */}
        </div>
      ))}
      <button
        onClick={handleUpdate}
        className="w-full px-4 py-2 mt-10 text-white bg-green-500 rounded"
      >
        Keep Note
      </button>
    </div>
  );
};

export default NoteKeeping;
