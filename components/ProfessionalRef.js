import React from 'react'

const ProfessionalRef = ({ onChange, values }) => {
  return (
    <>
          <div>
          <h1 className="text-3xl font-bold">PROFESSIONAL REFERENCE CHECK 1</h1>
        <label htmlFor="pname">Name</label>
        <input
          type="text"
          id="pname"
          value={values.pname}
          onChange={(e) => onChange("pname", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pcompany">Company and Designation</label>
        <input
          type="text"
          id="pcompany"
          value={values.pcompany}
          onChange={(e) => onChange("pcompany", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pcontact">Contact details</label>
        <input
          type="text"
          id="pcontact"
          value={values.pcontact}
          onChange={(e) => onChange("pcontact", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pemail">Email ID</label>
        <input
          type="email"
          id="pemail"
          value={values.pemail}
          onChange={(e) => onChange("pemail", e.target.value)}
        />
      </div>

      {/* PROFESSIONAL REFERENCE CHECK 1 */}

      <div>
        <label htmlFor="pname1">Name</label>
        <input
          type="text"
          id="pname1"
          value={values.pname1}
          onChange={(e) => onChange("pname1", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pcompany1">Company and Designation</label>
        <input
          type="text"
          id="pcompany1"
          value={values.pcompany1}
          onChange={(e) => onChange("pcompany1", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pcontact1">Contact details</label>
        <input
          type="text"
          id="pcontact1"
          value={values.pcontact1}
          onChange={(e) => onChange("pcontact1", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pemail1">Email ID</label>
        <input
          type="email"
          id="pemail1"
          value={values.pemail1}
          onChange={(e) => onChange("pemail1", e.target.value)}
        />
      </div>
      {/* PROFESSIONAL REFERENCE CHECK 1 End*/}
    </>
  )
}

export default ProfessionalRef