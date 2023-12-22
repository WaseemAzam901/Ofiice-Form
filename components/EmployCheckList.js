import React from 'react'

const EmployCheckList = ({ onChange, values }) => {
  return (
    <>
{/* Previous fields are not included here as per your request */}
      
      {/* Onboarding Checklist */}
      <h1 className="text-3xl font-bold">EMPLOYEE CHECKLIST</h1>
      <div className="mb-4">
        <label htmlFor="signedContract">Signed employment contract</label>
        <div className="flex gap-4">
          <input
            type="radio"
            id="signedContractYes"
            name="signedContract"
            value="YES"
            checked={values.signedContract === "YES"}
            onChange={() => onChange("signedContract", "YES")}
          />
          <label htmlFor="signedContractYes">YES</label>
          <input
            type="radio"
            id="signedContractNo"
            name="signedContract"
            value="NO"
            checked={values.signedContract === "NO"}
            onChange={() => onChange("signedContract", "NO")}
          />
          <label htmlFor="signedContractNo">NO</label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="jobDescription">Job description has been explained by the line manager</label>
        <div className="flex gap-4">
          <input
            type="radio"
            id="jobDescriptionYes"
            name="jobDescription"
            value="YES"
            checked={values.jobDescription === "YES"}
            onChange={() => onChange("jobDescription", "YES")}
          />
          <label htmlFor="jobDescriptionYes">YES</label>
          <input
            type="radio"
            id="jobDescriptionNo"
            name="jobDescription"
            value="NO"
            checked={values.jobDescription === "NO"}
            onChange={() => onChange("jobDescription", "NO")}
          />
          <label htmlFor="jobDescriptionNo">NO</label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="validID">Valid ID (Self-attested copies)</label>
        <div className="flex gap-4">
          <input
            type="radio"
            id="validIDYes"
            name="validID"
            value="YES"
            checked={values.validID === "YES"}
            onChange={() => onChange("validID", "YES")}
          />
          <label htmlFor="validIDYes">YES</label>
          <input
            type="radio"
            id="validIDNo"
            name="validID"
            value="NO"
            checked={values.validID === "NO"}
            onChange={() => onChange("validID", "NO")}
          />
          <label htmlFor="validIDNo">NO</label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="hiring">Result of the hiring process</label>
        <div className="flex gap-4">
          <input
            type="radio"
            id="hiringYes"
            name="hiring"
            value="YES"
            checked={values.hiring === "YES"}
            onChange={() => onChange("hiring", "YES")}
          />
          <label htmlFor="hiringYes">YES</label>
          <input
            type="radio"
            id="hiringNo"
            name="hiring"
            value="NO"
            checked={values.hiring === "NO"}
            onChange={() => onChange("hiring", "NO")}
          />
          <label htmlFor="hiringNo">NO</label>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="SharedCV">I shared the following personal documents with this onboarding form (Curriculum vitae)</label>
        <div className="flex gap-4">
          <input
            type="radio"
            id="SharedCVYes"
            name="SharedCV"
            value="YES"
            checked={values.SharedCV === "YES"}
            onChange={() => onChange("SharedCV", "YES")}
          />
          <label htmlFor="SharedCVYes">YES</label>
          <input
            type="radio"
            id="SharedCVNo"
            name="SharedCV"
            value="NO"
            checked={values.SharedCV === "NO"}
            onChange={() => onChange("SharedCV", "NO")}
          />
          <label htmlFor="SharedCVNo">NO</label>
        </div>
      </div>
      <div className="mb-4">
  <label htmlFor="cvSubmitted">Curriculum vitae</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="cvSubmittedYes"
      name="cvSubmitted"
      value="YES"
      checked={values.cvSubmitted === "YES"}
      onChange={() => onChange("cvSubmitted", "YES")}
    />
    <label htmlFor="cvSubmittedYes">YES</label>
    <input
      type="radio"
      id="cvSubmittedNo"
      name="cvSubmitted"
      value="NO"
      checked={values.cvSubmitted === "NO"}
      onChange={() => onChange("cvSubmitted", "NO")}
    />
    <label htmlFor="cvSubmittedNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="PreviousEmployer">Certificates from the previous employer</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="PreviousEmployerYes"
      name="PreviousEmployer"
      value="YES"
      checked={values.PreviousEmployer === "YES"}
      onChange={() => onChange("PreviousEmployer", "YES")}
    />
    <label htmlFor="PreviousEmployerYes">YES</label>
    <input
      type="radio"
      id="PreviousEmployerNo"
      name="PreviousEmployer"
      value="NO"
      checked={values.PreviousEmployer === "NO"}
      onChange={() => onChange("PreviousEmployer", "NO")}
    />
    <label htmlFor="PreviousEmployerNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="Fitness">Medical fitness certificate from the qualified medical practitioner</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="FitnessYes"
      name="Fitness"
      value="YES"
      checked={values.Fitness === "YES"}
      onChange={() => onChange("Fitness", "YES")}
    />
    <label htmlFor="FitnessYes">YES</label>
    <input
      type="radio"
      id="FitnessNo"
      name="Fitness"
      value="NO"
      checked={values.Fitness === "NO"}
      onChange={() => onChange("Fitness", "NO")}
    />
    <label htmlFor="FitnessNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="sssRegistration">SSS registration / E1 Form</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="sssRegistrationYes"
      name="sssRegistration"
      value="YES"
      checked={values.sssRegistration === "YES"}
      onChange={() => onChange("sssRegistration", "YES")}
    />
    <label htmlFor="sssRegistrationYes">YES</label>
    <input
      type="radio"
      id="sssRegistrationNo"
      name="sssRegistration"
      value="NO"
      checked={values.sssRegistration === "NO"}
      onChange={() => onChange("sssRegistration", "NO")}
    />
    <label htmlFor="sssRegistrationNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="phicRegistration">PHIC registration / PMRF</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="phicRegistrationYes"
      name="phicRegistration"
      value="YES"
      checked={values.phicRegistration === "YES"}
      onChange={() => onChange("phicRegistration", "YES")}
    />
    <label htmlFor="phicRegistrationYes">YES</label>
    <input
      type="radio"
      id="phicRegistrationNo"
      name="phicRegistration"
      value="NO"
      checked={values.phicRegistration === "NO"}
      onChange={() => onChange("phicRegistration", "NO")}
    />
    <label htmlFor="phicRegistrationNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="birRegistrationForm">BIR registration form (in absence of TIN) BIR form</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="birRegistrationFormYes"
      name="birRegistrationForm"
      value="YES"
      checked={values.birRegistrationForm === "YES"}
      onChange={() => onChange("birRegistrationForm", "YES")}
    />
    <label htmlFor="birRegistrationFormYes">YES</label>
    <input
      type="radio"
      id="birRegistrationFormNo"
      name="birRegistrationForm"
      value="NO"
      checked={values.birRegistrationForm === "NO"}
      onChange={() => onChange("birRegistrationForm", "NO")}
    />
    <label htmlFor="birRegistrationFormNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="tinID">TIN ID</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="tinIDYes"
      name="tinID"
      value="YES"
      checked={values.tinID === "YES"}
      onChange={() => onChange("tinID", "YES")}
    />
    <label htmlFor="tinIDYes">YES</label>
    <input
      type="radio"
      id="tinIDNo"
      name="tinID"
      value="NO"
      checked={values.tinID === "NO"}
      onChange={() => onChange("tinID", "NO")}
    />
    <label htmlFor="tinIDNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="transcriptOfRecords">Transcript of records</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="transcriptOfRecordsYes"
      name="transcriptOfRecords"
      value="YES"
      checked={values.transcriptOfRecords === "YES"}
      onChange={() => onChange("transcriptOfRecords", "YES")}
    />
    <label htmlFor="transcriptOfRecordsYes">YES</label>
    <input
      type="radio"
      id="transcriptOfRecordsNo"
      name="transcriptOfRecords"
      value="NO"
      checked={values.transcriptOfRecords === "NO"}
      onChange={() => onChange("transcriptOfRecords", "NO")}
    />
    <label htmlFor="transcriptOfRecordsNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="trainingCertificates">Training certificates</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="trainingCertificatesYes"
      name="trainingCertificates"
      value="YES"
      checked={values.trainingCertificates === "YES"}
      onChange={() => onChange("trainingCertificates", "YES")}
    />
    <label htmlFor="trainingCertificatesYes">YES</label>
    <input
      type="radio"
      id="trainingCertificatesNo"
      name="trainingCertificates"
      value="NO"
      checked={values.trainingCertificates === "NO"}
      onChange={() => onChange("trainingCertificates", "NO")}
    />
    <label htmlFor="trainingCertificatesNo">NO</label>
  </div>
</div>

<div className="mb-4">
  <label htmlFor="passportSizePhoto">Recent Passport size photo (in white background)</label>
  <div className="flex gap-4">
    <input
      type="radio"
      id="passportSizePhotoYes"
      name="passportSizePhoto"
      value="YES"
      checked={values.passportSizePhoto === "YES"}
      onChange={() => onChange("passportSizePhoto", "YES")}
    />
    <label htmlFor="passportSizePhotoYes">YES</label>
    <input
      type="radio"
      id="passportSizePhotoNo"
      name="passportSizePhoto"
      value="NO"
      checked={values.passportSizePhoto === "NO"}
      onChange={() => onChange("passportSizePhoto", "NO")}
    />
    <label htmlFor="passportSizePhotoNo">NO</label>
  </div>
</div>

    </>
  )
}

export default EmployCheckList