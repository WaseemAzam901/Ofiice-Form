import React from 'react'

const Health = ({ onChange, values }) => {
  return (
    <>
    {/* Medical Information */}
    <h1 className="text-3xl font-bold">HEALTH HISTORY</h1>
<div>
  <label htmlFor="bloodType">Blood Type</label>
  <input
    type="text"
    id="bloodType"
    value={values.bloodType}
    onChange={(e) => onChange("bloodType", e.target.value)}
  />
</div>

<div>
  <label htmlFor="allergiesMedicalProblems">Allergies/Medical Problems</label>
  <input
    type="text"
    id="allergiesMedicalProblems"
    value={values.allergiesMedicalProblems}
    onChange={(e) => onChange("allergiesMedicalProblems", e.target.value)}
  />
</div>

<div>
  <label htmlFor="significantMedicalHistory">Significant Medical History</label>
  <textarea
    id="significantMedicalHistory"
    value={values.significantMedicalHistory}
    onChange={(e) => onChange("significantMedicalHistory", e.target.value)}
  />
</div>
    </>
  )
}

export default Health