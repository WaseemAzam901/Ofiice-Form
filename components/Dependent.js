import React from 'react'

const Dependent = ({ onChange, values}) => {
  return (
    <>
    <h1 className="text-3xl font-bold">DEPENDENT 1 - DETAILS</h1>
    <div>
  <label htmlFor="dName">Name</label>
  <input
    type="text"
    id="dName"
    value={values.dName}
    onChange={(e) => onChange("dName", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dAge">Age</label>
  <input
    type="text"
    id="dAge"
    value={values.dAge}
    onChange={(e) => onChange("dAge", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dAddress">Address</label>
  <input
    type="text"
    id="dAddress"
    value={values.dAddress}
    onChange={(e) => onChange("dAddress", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dContactInfo">Contact Info</label>
  <input
    type="text"
    id="dContactInfo"
    value={values.dContactInfo}
    onChange={(e) => onChange("dContactInfo", e.target.value)}
  />
</div>




{/* dependen2 */}
<h1 className="text-3xl font-bold">DEPENDENT 2 - DETAILS</h1>
<div>
  <label htmlFor="dName2">Name</label>
  <input
    type="text"
    id="dName2"
    value={values.dName2}
    onChange={(e) => onChange("dName2", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dAge2">Age</label>
  <input
    type="text"
    id="dAge2"
    value={values.dAge2}
    onChange={(e) => onChange("dAge2", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dAddress2">Address</label>
  <input
    type="text"
    id="dAddress2"
    value={values.dAddress2}
    onChange={(e) => onChange("dAddress2", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dContactInfo2">Contact Info</label>
  <input
    type="text"
    id="dContactInfo2"
    value={values.dContactInfo2}
    onChange={(e) => onChange("dContactInfo2", e.target.value)}
  />
</div>
{/* dependen2 End*/}






{/* dependen3 Start*/}
<h1 className="text-3xl font-bold">DEPENDENT 3 - DETAILS</h1>
<div>
  <label htmlFor="dName3">Name</label>
  <input
    type="text"
    id="dName3"
    value={values.dName3}
    onChange={(e) => onChange("dName3", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dAge3">Age</label>
  <input
    type="text"
    id="dAge3"
    value={values.dAge3}
    onChange={(e) => onChange("dAge3", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dAddress3">Address</label>
  <input
    type="text"
    id="dAddress3"
    value={values.dAddress3}
    onChange={(e) => onChange("dAddress3", e.target.value)}
  />
</div>

<div>
  <label htmlFor="dContactInfo3">Contact Info</label>
  <input
    type="text"
    id="dContactInfo3"
    value={values.dContactInfo3}
    onChange={(e) => onChange("dContactInfo3", e.target.value)}
  />
</div>
{/* dependen3 End*/}
    </>
  )
}

export default Dependent