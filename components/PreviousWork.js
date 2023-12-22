import React from 'react'

const PreviousWork = ({ onChange, values, bank, bankfun}) => {
  return (
    <>
    <h1 className="text-3xl font-bold">PREVIOUS WORK HISTORY</h1>
    {/* Display two input fields for simplicity */}
    <div>
          <label htmlFor="companyNamu">Company Name</label>
          <input
            type="text"
            id="companyNamu"
            value={values.companynamu}
            onChange={(e) => onChange("companyNamu", e.target.value)}
          />
    </div>
    <div>
          <label htmlFor="departmentu">Department</label>
          <input
            type="text"
            id="departmentu"
            value={values.departmentu}
            onChange={(e) => onChange("departmentu", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="positionu">Position</label>
          <input
            type="text"
            id="positionu"
            value={values.positionu}
            onChange={(e) => onChange("positionu", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="locationu">Location</label>
          <input
            type="text"
            id="locationu"
            value={values.locationu}
            onChange={(e) => onChange("locationu", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfJoining">Date of Joining</label>
          <input
            type="text" // You might want to change this to 'date' if you're picking dates
            id="dateOfJoining"
            value={values.dateOfJoining}
            onChange={(e) => onChange("dateOfJoining", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfLeaving">Date of Leaving</label>
          <input
            type="text" // You might want to change this to 'date' if you're picking dates
            id="dateOfLeaving"
            value={values.dateOfLeaving}
            onChange={(e) => onChange("dateOfLeaving", e.target.value)}
          />
        </div>


        {/* Bank Account Detail Start*/}

        <div>
  <label htmlFor="accountName">Account Name</label>
  <input
    type="text"
    id="accountName"
    value={bank.accountName}
    onChange={(e) => bankfun("accountName", e.target.value)}
  />
</div>

<div>
  <label htmlFor="accountNumber">Account Number</label>
  <input
    type="text"
    id="accountNumber"
    value={bank.accountNumber}
    onChange={(e) => bankfun("accountNumber", e.target.value)}
  />
</div>

<div>
  <label htmlFor="shiftCode">Shift Code</label>
  <input
    type="text"
    id="shiftCode"
    value={bank.shiftCode}
    onChange={(e) => bankfun("shiftCode", e.target.value)}
  />
</div>

<div>
  <label htmlFor="bankAddress">Bank Address</label>
  <input
    type="text"
    id="bankAddress"
    value={bank.bankAddress}
    onChange={(e) => bankfun("bankAddress", e.target.value)}
  />
</div>        


        {/* Bank Account Detail End */}

  </>

  )
}

export default PreviousWork