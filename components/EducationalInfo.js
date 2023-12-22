import React from 'react'

const EducationalInfo = ({ onChange, values}) => {
  return (
    <>
    <h1 className="text-3xl font-bold">EDUCATIONAL INFORMATION</h1>
    <div>
  <label htmlFor="elementarySchool">Elementary School</label>
  <input
    type="text"
    id="elementarySchool"
    value={values.elementarySchool}
    onChange={(e) => onChange("elementarySchool", e.target.value)}
  />
</div>

<div>
  <label htmlFor="elementaryAdmissionYear">Admission Year</label>
  <input
    type="text"
    id="elementaryAdmissionYear"
    value={values.elementaryAdmissionYear}
    onChange={(e) => onChange("elementaryAdmissionYear", e.target.value)}
  />
</div>

<div>
  <label htmlFor="elementaryPassedOutYear">Passed Out Year</label>
  <input
    type="text"
    id="elementaryPassedOutYear"
    value={values.elementaryPassedOutYear}
    onChange={(e) => onChange("elementaryPassedOutYear", e.target.value)}
  />
</div>

<div>
  <label htmlFor="elementaryAwards">Awards</label>
  <input
    type="text"
    id="elementaryAwards"
    value={values.elementaryAwards}
    onChange={(e) => onChange("elementaryAwards", e.target.value)}
  />
</div>

<div>
  <label htmlFor="elementaryInstitution">Institution</label>
  <input
    type="text"
    id="elementaryInstitution"
    value={values.elementaryInstitution}
    onChange={(e) => onChange("elementaryInstitution", e.target.value)}
  />
</div>

<div>
  <label htmlFor="elementaryPlace">Place</label>
  <input
    type="text"
    id="elementaryPlace"
    value={values.elementaryPlace}
    onChange={(e) => onChange("elementaryPlace", e.target.value)}
  />
</div>
<div>
  <label htmlFor="highSchool">High School</label>
  <input
    type="text"
    id="highSchool"
    value={values.highSchool}
    onChange={(e) => onChange("highSchool", e.target.value)}
  />
</div>

<div>
  <label htmlFor="highSchoolAdmissionYear">Admission Year</label>
  <input
    type="text"
    id="highSchoolAdmissionYear"
    value={values.highSchoolAdmissionYear}
    onChange={(e) => onChange("highSchoolAdmissionYear", e.target.value)}
  />
</div>

<div>
  <label htmlFor="highSchoolPassedOutYear">Passed Out Year</label>
  <input
    type="text"
    id="highSchoolPassedOutYear"
    value={values.highSchoolPassedOutYear}
    onChange={(e) => onChange("highSchoolPassedOutYear", e.target.value)}
  />
</div>

<div>
  <label htmlFor="highSchoolAwards">Awards</label>
  <input
    type="text"
    id="highSchoolAwards"
    value={values.highSchoolAwards}
    onChange={(e) => onChange("highSchoolAwards", e.target.value)}
  />
</div>

<div>
  <label htmlFor="highSchoolInstitution">Institution</label>
  <input
    type="text"
    id="highSchoolInstitution"
    value={values.highSchoolInstitution}
    onChange={(e) => onChange("highSchoolInstitution", e.target.value)}
  />
</div>

<div>
  <label htmlFor="highSchoolPlace">Place</label>
  <input
    type="text"
    id="highSchoolPlace"
    value={values.highSchoolPlace}
    onChange={(e) => onChange("highSchoolPlace", e.target.value)}
  />
</div>

{/* Higher Education Information */}
<div>
  <label htmlFor="highestEducationLevel">Highest Education Level</label>
  <input
    type="text"
    id="highestEducationLevel"
    value={values.highestEducationLevel}
    onChange={(e) => onChange("highestEducationLevel", e.target.value)}
  />
</div>

<div>
  <label htmlFor="educationSpecialization">Education Specialization</label>
  <input
    type="text"
    id="educationSpecialization"
    value={values.educationSpecialization}
    onChange={(e) => onChange("educationSpecialization", e.target.value)}
  />
</div>

<div>
  <label htmlFor="educationAdmissionYear">Admission Year</label>
  <input
    type="text"
    id="educationAdmissionYear"
    value={values.educationAdmissionYear}
    onChange={(e) => onChange("educationAdmissionYear", e.target.value)}
  />
</div>

<div>
  <label htmlFor="educationPassedOutYear">Passed Out Year</label>
  <input
    type="text"
    id="educationPassedOutYear"
    value={values.educationPassedOutYear}
    onChange={(e) => onChange("educationPassedOutYear", e.target.value)}
  />
</div>

<div>
  <label htmlFor="educationAwards">Awards</label>
  <input
    type="text"
    id="educationAwards"
    value={values.educationAwards}
    onChange={(e) => onChange("educationAwards", e.target.value)}
  />
</div>

<div>
  <label htmlFor="educationInstitution">Institution</label>
  <input
    type="text"
    id="educationInstitution"
    value={values.educationInstitution}
    onChange={(e) => onChange("educationInstitution", e.target.value)}
  />
</div>

<div>
  <label htmlFor="educationPlace">Place</label>
  <input
    type="text"
    id="educationPlace"
    value={values.educationPlace}
    onChange={(e) => onChange("educationPlace", e.target.value)}
  />
</div>
    </>
  )
}

export default EducationalInfo