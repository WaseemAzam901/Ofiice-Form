import React from 'react'

const WorkInformation = ({ onChange, values }) => {
  return (
    <>
    <div>
    <h1 className="text-3xl font-bold">WORK INFORMATION</h1>
  <label htmlFor="companyName">Company Name</label>
  <input
    type="text"
    id="companyName"
    value={values.companyName}
    onChange={(e) => onChange("companyName", e.target.value)}
  />
</div>

<div>
  <label htmlFor="department">Department</label>
  <input
    type="text"
    id="department"
    value={values.department}
    onChange={(e) => onChange("department", e.target.value)}
  />
</div>

<div>
  <label htmlFor="position">Position</label>
  <input
    type="text"
    id="position"
    value={values.position}
    onChange={(e) => onChange("position", e.target.value)}
  />
</div>

<div>
  <label htmlFor="workEmail">Work Email</label>
  <input
    type="email"
    id="workEmail"
    value={values.workEmail}
    onChange={(e) => onChange("workEmail", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dateHired">Date Hired</label>
  <input
    type="date"
    id="dateHired"
    value={values.dateHired}
    onChange={(e) => onChange("dateHired", e.target.value)}
  />
</div>

{/* <div>
  <label htmlFor="employeeStatus">Employee Status</label>
  <select
    id="employeeStatus"
    value={values.employeeStatus}
    onChange={(e) => onChange("employeeStatus", e.target.value)}
  >
    <option value="fullTime">Full Time</option>
    <option value="partTime">Part Time</option>
    <option value="contractor">Contractor</option>
  </select>
</div> */}
<div className="mb-4">
  <label htmlFor="employeeStatus">Employee Status</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="employeeStatus"
      name="employeeStatus"
      value="fullTime"
      checked={values.employeeStatus === "fullTime"}
      onChange={() => onChange("employeeStatus", "fullTime")}
    />
    <label htmlFor="employeeStatus">Full Time</label>
    <input
      type="radio"
      id="employeeStatus"
      name="employeeStatus"
      value="partTime"
      checked={values.employeeStatus === "partTime"}
      onChange={() => onChange("employeeStatus", "partTime")}
    />
    <label htmlFor="passportSizePhotoNo">Part Time</label>
    <input
      type="radio"
      id="employeeStatus"
      name="employeeStatus"
      value="contractor"
      checked={values.employeeStatus === "contractor"}
      onChange={() => onChange("employeeStatus", "contractor")}
    />
    <label htmlFor="passportSizePhotoNo">Contractor</label>
  </div>
</div>

<div>
  <label htmlFor="phoneNumber">Phone Number</label>
  <input
    type="tel"
    id="phoneNumber"
    value={values.phoneNumber}
    onChange={(e) => onChange("phoneNumber", e.target.value)}
  />
</div>

<div>
  <label htmlFor="positionLevel">Position Level</label>
  <input
    type="text"
    id="positionLevel"
    value={values.positionLevel}
    onChange={(e) => onChange("positionLevel", e.target.value)}
  />
</div>

<div>
  <label htmlFor="companyAddress">Company Address</label>
  <textarea
    id="companyAddress"
    value={values.companyAddress}
    onChange={(e) => onChange("companyAddress", e.target.value)}
  />
</div>

<div>
  <label htmlFor="sssNumber">SSS Number</label>
  <input
    type="text"
    id="sssNumber"
    value={values.sssNumber}
    onChange={(e) => onChange("sssNumber", e.target.value)}
  />
</div>

<div>
  <label htmlFor="philhealthNumber">Philhealth Number</label>
  <input
    type="text"
    id="philhealthNumber"
    value={values.philhealthNumber}
    onChange={(e) => onChange("philhealthNumber", e.target.value)}
  />
</div>

<div>
  <label htmlFor="pagibigNumber">Pagibig Number</label>
  <input
    type="text"
    id="pagibigNumber"
    value={values.pagibigNumber}
    onChange={(e) => onChange("pagibigNumber", e.target.value)}
  />
</div>

<div>
  <label htmlFor="taxIDNumber">Tax ID Number</label>
  <input
    type="text"
    id="taxIDNumber"
    value={values.taxIDNumber}
    onChange={(e) => onChange("taxIDNumber", e.target.value)}
  />
</div>

{/* <div>
  <label htmlFor="taxStatus">Tax Status</label>
  <select
    id="taxStatus"
    value={values.taxStatus}
    onChange={(e) => onChange("taxStatus", e.target.value)}
  >
    <option value="single">Single</option>
    <option value="married">Married</option>
  </select>
</div> */}

<div>
  <label htmlFor="taxStatus">Tax Status</label>
  <textarea
    id="taxStatus"
    value={values.taxStatus}
    onChange={(e) => onChange("taxStatus", e.target.value)}
  />
</div>


<div>
  <label htmlFor="jobDescription">Job Description</label>
  <textarea
    id="jobDescription"
    value={values.jobDescription}
    onChange={(e) => onChange("jobDescription", e.target.value)}
  />
</div>
    </>
  )
}

export default WorkInformation