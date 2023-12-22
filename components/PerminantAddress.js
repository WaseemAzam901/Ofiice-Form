import React from 'react'

const PerminantAddress = ({ onChange, values }) => {
    return (
        <>
          <h1 className="text-3xl font-bold">Permanent Address</h1>
          {/* Display two input fields for simplicity */}
          <div>
            <label htmlFor="salma">Salma</label>
            <input
              type="text"
              id="salma"
              value={values.salma}
              onChange={(e) => onChange("salma", e.target.value)}
              placeholder="Enter Salma"
            />
          </div>
          <div>
            <label htmlFor="pstreet">Permanent Street</label>
            <input
              type="text"
              id="pstreet"
              value={values.pstreet}
              onChange={(e) => onChange("pstreet", e.target.value)}
              placeholder="Enter Permanent Street"
            />
          </div>
        </>
      );
}

export default PerminantAddress