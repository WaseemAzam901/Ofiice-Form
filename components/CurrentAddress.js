import React from "react";
const CurrentAddress = ({ onChange, values }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Current Address</h1>
      {/* Display two input fields for simplicity */}
      <div>
        <label htmlFor="blockLotNo">Block/Lot No</label>
        <input
          type="text"
          id="blockLotNo"
          value={values.blockLotNo}
          onChange={(e) => onChange("blockLotNo", e.target.value)}
          placeholder="Enter Block/Lot No"
        />
      </div>
      <div>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={values.street}
          onChange={(e) => onChange("street", e.target.value)}
          placeholder="Enter Street"
        />
      </div>
    </>
  );
};

export default CurrentAddress;