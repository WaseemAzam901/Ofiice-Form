"use client";


import { useState } from "react";
import PreviousWork from "./PreviousWork";
import Dependent from "./Dependent";
import Emergency from "./Emergency";
import Health from "./Health";
import ProfessionalRef from "./ProfessionalRef";
import EmployCheckList from "./EmployCheckList";
import WorkInformation from "./WorkInformation";
import EducationalInfo from "./EducationalInfo";

export default function ContactForm() {

  const [page, setPage] = useState(1);

//Work Information Started


//Work Information End



  const [workinfo, setWorkinfo] = useState({
    companyName: "",
    department: "",
    position: "",
    workEmail: "",
    dateHired: "",
    employeeStatus: "",
    phoneNumber: "",
    positionLevel: "",
    companyAddress: "",
    sssNumber: "",
    philhealthNumber: "",
    pagibigNumber: "",
    taxIDNumber: "",
    taxStatus: "",
    jobDescription: "",
  });
  // Educational Information Started



// Educational Information End
  const [education, setEducation] = useState({
    elementarySchool: "",
    elementaryAdmissionYear: "",
    elementaryPassedOutYear: "",
    elementaryAwards: "",
    elementaryInstitution: "",
    elementaryPlace: "",
    highSchool: "",
    highSchoolAdmissionYear: "",
    highSchoolPassedOutYear: "",
    highSchoolAwards: "",
    highSchoolInstitution: "",
    highSchoolPlace: "",
    highestEducationLevel: "",
    educationSpecialization: "",
    educationAdmissionYear: "",
    educationPassedOutYear: "",
    educationAwards: "",
    educationInstitution: "",
    educationPlace: "",
  });

  const [previous, setPrevious] = useState({
    companyNamu: "",
    departmentu: "",
    positionu: "",
    locationu: "",
    dateOfJoining: "",
    dateOfLeaving: "",
  });

  const [bank, setBank] = useState({
    accountName: "",
    accountNumber: "",
    shiftCode: "",
    bankAddress: "",
  });

  const [dependent, setDependent] = useState({
    dName: "",
    dAge: "",
    dAddress: "",
    dContactInfo: "",
    dName2: "",
    dAge2: "",
    dAddress2: "",
    dContactInfo2: "",
    dName3: "",
    dAge3: "",
    dAddress3: "",
    dContactInfo3: "",
  });

  const [emergency, setEmergency] = useState({
    ceName: "",
    ceRelationship: "",
    ceWorkPhone: "",
    ceMobileHomePhone: "",
    ceEmail: "",
    ceAddress: "",
  });
  const [health, setHealth] = useState({
    bloodType: "",
    allergiesMedicalProblems: "",
    significantMedicalHistory: "",
  });
  const [professionalref, setProfessionalref] = useState({
    pname: "",
    pcompany: "",
    pcontact: "",
    pemail: "",
    pname1: "",
    pcompany1: "",
    pcontact1: "",
    pemail1: "",
  });
  const [checkList, setCheckList] = useState({
    signedContract: "",
    jobDescription: "",
    validID: "",
    hiring: "",
    SharedCV: "",
    cvSubmitted: "",
    PreviousEmployer: "",
    Fitness: "",
    sssRegistration: "",
    phicRegistration: "",
    birRegistrationForm: "",
    tinID: "",
    transcriptOfRecords: "",
    trainingCertificates: "",
    passportSizePhoto: "",
  });


  const handleChange = (field, value) => {
    if (page === 2) {
      setWorkinfo((prev) => ({ ...prev, [field]: value }));
    }
    else if (page === 3) {
      setEducation((prev) => ({ ...prev, [field]: value }));
    }
    else if (page === 4) {
      setPrevious((prev) => ({ ...prev, [field]: value }));
    }

    else if (page === 5) {
      setDependent((prev) => ({ ...prev, [field]: value }));
    }
    else if (page === 6) {
      setEmergency((prev) => ({ ...prev, [field]: value }));
    }
    else if (page === 7) {
      setHealth((prev) => ({ ...prev, [field]: value }));
    }
    else if (page === 8) {
      setProfessionalref((prev) => ({ ...prev, [field]: value }));
    }
    else if (page === 9) {
      setCheckList((prev) => ({ ...prev, [field]: value }));
    }
  };
  const bankfun = (field, value) => {
    if (page === 4) {
      setBank((prev) => ({ ...prev, [field]: value }));
    }
  };


  const handleNextPage = () => {
    setPage(page + 1);
    // window.scrollTo({ top: 0, behavior: 'smooth' });
    window.scrollTo(0, 0);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const [fullname, setFullname] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [lastname, setLastname] = useState("")
  const [title, setTitle] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState("")
  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  const [gendery, setGendery] = useState("")
  const [error, setError] = useState([])
  const [success, setSuccess] = useState(false)

  // current address Started
  const [blockLotNo, setBlockLotNo] = useState("");
  const [street, setStreet] = useState("");
  const [barangay, setBarangay] = useState("");
  const [village, setVillage] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
 // current address End

 // Perminant address Started
 const [salma, setSalma] = useState("");
 const [pstreet, setPstreet] = useState("");
 const [pbarangay, setPbarangay] = useState("");
 const [pvillage, setPvillage] = useState("");
 const [pcity, setPcity] = useState("");
 const [pprovince, setPprovince] = useState("");
 const [emailId, setEmailId] = useState("");
 const [alternativeContact, setAlternativeContact] = useState("");
 // Perminant address End


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Previous Object:", previous.companyNamu);
        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname,
                middleName,
                title,
                contactNumber,
                email,
                dob,
                status,
                gendery,
                lastname,
                blockLotNo,
                street,
                barangay,
                village,
                city,
                province,
                salma,
                pstreet,
                pbarangay,
                pvillage,
                pcity,
                pprovince,
                emailId,
                alternativeContact,
                previous,
                bank,
                dependent,
                emergency,
                health,
                professionalref,
                checkList,
                workinfo,
                education,
            }),
        });
        const {msg, success} = await res.json();
        setError(msg);
        setSuccess(success);
        if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
            setLastname("");
        }
    };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
      {page === 1 && (  
        <>
        <h1 className="text-3xl font-bold">PERSONAL DETAILS</h1>
              <div>
          <label htmlFor="fullname">Full Name</label>
          <input onChange={(e)=> {setFullname(e.target.value)}} type="text" id="fullname" value={fullname} placeholder="John Doe"/>
        </div>
        
        
        <div>
            <label htmlFor="middleName">Middle name</label>
            <input onChange={(e)=> {setMiddleName(e.target.value)}} type="text" id="middleName" value={middleName}/>
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input onChange={(e)=> {setLastname(e.target.value)}} type="text" id="lastname" value={lastname} placeholder="John Doe"/>
        </div>
        <div>
            <label htmlFor="title">Title</label>
            <input onChange={(e)=> {setTitle(e.target.value)}} type="text" id="title" value={title}/>
        </div>
        <div>
            <label htmlFor="contactNumber">Contact number</label>
            <input onChange={(e)=> {setContactNumber(e.target.value)}} type="tel" id="contactNumber" value={contactNumber} />
          </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={(e)=> {setEmail(e.target.value)}} type="email" id="email" value={email} placeholder="john@gmail.com" />
        </div>


        <div className="flex-1">
            <label>Gender</label>
            <div className="flex items-center space-x-2">
              <input onChange={(e)=> {setGendery(e.target.value)}} type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div className="flex items-center space-x-2">
              <input onChange={(e)=> {setGendery(e.target.value)}} type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
            </div>
        </div>

        <div>
            <label htmlFor="dob">Date of Birth (dd/mm/yy)</label>
            <input onChange={(e)=> {setDob(e.target.value)}} type="text" id="dob" value={dob}/>
        </div>


        <div className="flex-1">
          <label>Marital Status</label>
          <div className="flex items-center space-x-2">
            <input onChange={(e)=> {setStatus(e.target.value)}} type="radio" id="single" name="maritalStatus" value="single" />
            <label htmlFor="single">Single</label>
          </div>
          <div className="flex items-center space-x-2">
            <input onChange={(e)=> {setStatus(e.target.value)}} type="radio" id="married" name="maritalStatus" value="married" />
            <label htmlFor="married">Married</label>
          </div>
          <div className="flex items-center space-x-2">
            <input onChange={(e)=> {setStatus(e.target.value)}} type="radio" id="divorced" name="maritalStatus" value="divorced" />
            <label htmlFor="divorced">Divorced</label>
          </div>
          <div className="flex items-center space-x-2">
            <input onChange={(e)=> {setStatus(e.target.value)}} type="radio" id="widowed" name="maritalStatus" value="widowed" />
            <label htmlFor="widowed">Widowed</label>
          </div>
        </div>


        {/* Current Address Start */}
        <h1 className="text-3xl font-bold">Current Address</h1>
        <div>
          <label htmlFor="blockLotNo">Block/Lot No</label>
          <input
            onChange={(e) => {
              setBlockLotNo(e.target.value);
            }}
            type="text"
            id="blockLotNo"
            value={blockLotNo}
          />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <input
            onChange={(e) => {
              setStreet(e.target.value);
            }}
            type="text"
            id="street"
            value={street}
          />
        </div>
        <div>
          <label htmlFor="barangay">Barangay</label>
          <input
            onChange={(e) => {
              setBarangay(e.target.value);
            }}
            type="text"
            id="barangay"
            value={barangay}
          />
        </div>
        <div>
          <label htmlFor="village">Village</label>
          <input
            onChange={(e) => {
              setVillage(e.target.value);
            }}
            type="text"
            id="village"
            value={village}
          />
        </div>
        <div>
          <label htmlFor="city">Municipality/City</label>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
            id="city"
            value={city}
          />
        </div>
        <div>
          <label htmlFor="province">Province</label>
          <input
            onChange={(e) => {
              setProvince(e.target.value);
            }}
            type="text"
            id="province"
            value={province}
          />
        </div>
        {/* Current Address End */}

        {/* Perminant Address Start */}
        <h1 className="text-3xl font-bold">Perminant Address</h1>
        <div>
          <label htmlFor="blockLotNo">Block/Lot No</label>
          <input
            onChange={(e) => {
              setSalma(e.target.value);
            }}
            type="text"
            id="blockLotNo"
            value={salma}
          />
        </div>
        <div>
          <label htmlFor="street">Street</label>
          <input
            onChange={(e) => {
              setPstreet(e.target.value);
            }}
            type="text"
            id="street"
            value={pstreet}
          />
        </div>
        <div>
          <label htmlFor="barangay">Barangay</label>
          <input
            onChange={(e) => {
              setPbarangay(e.target.value);
            }}
            type="text"
            id="barangay"
            value={pbarangay}
          />
        </div>
        <div>
          <label htmlFor="village">Village</label>
          <input
            onChange={(e) => {
              setPvillage(e.target.value);
            }}
            type="text"
            id="village"
            value={pvillage}
          />
        </div>
        <div>
          <label htmlFor="city">Municipality/City</label>
          <input
            onChange={(e) => {
              setPcity(e.target.value);
            }}
            type="text"
            id="city"
            value={pcity}
          />
        </div>
        <div>
          <label htmlFor="province">Province</label>
          <input
            onChange={(e) => {
              setPprovince(e.target.value);
            }}
            type="text"
            id="province"
            value={pprovince}
          />
        </div>
        <div>
          <label htmlFor="emailId">Email ID</label>
          <input
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
            type="email"
            id="emailId"
            value={emailId}
            placeholder="john.doe@example.com"
          />
        </div>
        <div>
          <label htmlFor="alternativeContact">Alternative contact no</label>
          <input
            onChange={(e) => {
              setAlternativeContact(e.target.value);
            }}
            type="tel"
            id="alternativeContact"
            value={alternativeContact}
          />
        </div>


        </>
        )}
         {page === 1 && (
    <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="button" onClick={handleNextPage} className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">
      Next
    </button>
  </div>
      )}
        {page === 2 && (
        <>
        <WorkInformation onChange={handleChange} values={workinfo}/>
        <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="button" onClick={handleNextPage} className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">
      Next
    </button>
  </div>
        </>)}
        {page === 3 && (
        <>
        <EducationalInfo onChange={handleChange} values={education}/>
        <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="button" onClick={handleNextPage} className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">
      Next
    </button>
  </div>
        </>)}
      {page === 4 && (
        <>
        <PreviousWork onChange={handleChange} bankfun={bankfun} values={previous} bank={bank}/>
        <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="button" onClick={handleNextPage} className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">
      Next
    </button>
  </div>
        </>)}
      {page === 5 && (
        <>
        <Dependent onChange={handleChange} values={dependent}/>
        <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="button" onClick={handleNextPage} className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">
      Next
    </button>
  </div>
        </>)}
      {page === 6 && (
        <>
        <Emergency onChange={handleChange} values={emergency}/>
        <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="button" onClick={handleNextPage} className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">
      Next
    </button>
  </div>
        </>)}
      {page === 7 && (
        <>
        <Health onChange={handleChange} values={health}/>
        <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="button" onClick={handleNextPage} className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">
      Next
    </button>
  </div>
        </>)}
      {page === 8 && (
        <>
        <ProfessionalRef onChange={handleChange} values={professionalref}/>
        <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="button" onClick={handleNextPage} className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">
      Next
    </button>
  </div>
        </>)}
      {page === 9 && (
        <>
        <EmployCheckList onChange={handleChange} values={checkList}/>
        <div className="flex flex-row justify-between w-full">
    <button
      type="button"
      onClick={handlePrevPage}
      className={`bg-green-700 p-2 text-white font-bold ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''} w-1/4 inline-block`}
      disabled={page === 1}
    >
      Previous
    </button>
    <button type="submit" className="bg-green-700 p-2 text-white font-bold w-1/4 inline-block">Submit</button>
  </div>
        </>)}


      </form>

      <div className="bg-slate-100 flex flex-col">
        {error && error.map((e) => <div className={`${success ? "text-green-800" : "text-red-600"} px-5 py-2`}>{e}</div>)}
        
      </div>
    </>
  );
}
