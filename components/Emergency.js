import React from 'react'

const Emergency = ({ onChange, values }) => {
  return (
    <>
    <h1 className="text-3xl font-bold">EMERGENCY CONTACT NUMBER</h1>
    <div>
  <label htmlFor="ceName">Name</label>
  <input
    type="text"
    id="ceName"
    value={values.ceName}
    onChange={(e) => onChange("ceName", e.target.value)}
  />
</div>

<div>
  <label htmlFor="ceRelationship">Relationship</label>
  <input
    type="text"
    id="ceRelationship"
    value={values.ceRelationship}
    onChange={(e) => onChange("ceRelationship", e.target.value)}
  />
</div>

<div>
  <label htmlFor="ceWorkPhone">Work Phone</label>
  <input
    type="text"
    id="ceWorkPhone"
    value={values.ceWorkPhone}
    onChange={(e) => onChange("ceWorkPhone", e.target.value)}
  />
</div>

<div>
  <label htmlFor="ceMobileHomePhone">Mobile/Home Phone</label>
  <input
    type="text"
    id="ceMobileHomePhone"
    value={values.ceMobileHomePhone}
    onChange={(e) => onChange("ceMobileHomePhone", e.target.value)}
  />
</div>

<div>
  <label htmlFor="ceEmail">Email ID</label>
  <input
    type="text"
    id="ceEmail"
    value={values.ceEmail}
    onChange={(e) => onChange("ceEmail", e.target.value)}
  />
</div>

<div>
  <label htmlFor="ceAddress">Address</label>
  <input
    type="text"
    id="ceAddress"
    value={values.ceAddress}
    onChange={(e) => onChange("ceAddress", e.target.value)}
  />
</div>
    </>
  )
}

export default Emergency