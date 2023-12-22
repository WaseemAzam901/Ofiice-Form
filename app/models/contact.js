import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },
  middleName: {
    type: String,
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required."],
    trim: true,
  },
  title: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  dob: {
    type: String,
  },
  status: {
    type: String,
    enum: ["single", "married", "divorced", "widowed"],
  },
  gendery: {
    type: String,
    enum: ["male", "female"],
  },
  // New fields for current address
  blockLotNo: {
    type: String,
  },
  street: {
    type: String,
  },
  barangay: {
    type: String,
  },
  village: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  // New fields for current address

  // New fields for permanent address
  salma: {
    type: String,
  },
  pstreet: {
    type: String,
  },
  pbarangay: {
    type: String,
  },
  pvillage: {
    type: String,
  },
  pcity: {
    type: String,
  },
  pprovince: {
    type: String,
  },
  emailId: {
    type: String,
    required: [true, "Email ID is required"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  alternativeContact: {
    type: String,
  },
  // New fields for permanent address

   // New fields for employment information
   companyName: {
    type: String,
  },
  department: {
    type: String,
  },
  position: {
    type: String,
  },
  workEmail: {
    type: String,
    required: [true, "Work Email is required"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  dateHired: {
    type: String,
  },
  employeeStatus: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  positionLevel: {
    type: String,
  },
  companyAddress: {
    type: String,
  },
  sssNumber: {
    type: String,
  },
  philhealthNumber: {
    type: String,
  },
  pagibigNumber: {
    type: String,
  },
  taxIDNumber: {
    type: String,
  },
  taxStatus: {
    type: String,
  },
  jobDescription: {
    type: String,
  },

   // New fields for employment information
   companyName: {
    type: String,
  },
  department: {
    type: String,
  },
  position: {
    type: String,
  },
  workEmail: {
    type: String,
    required: [true, "Work Email is required"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  dateHired: {
    type: String,
  },
  employeeStatus: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  positionLevel: {
    type: String,
  },
  companyAddress: {
    type: String,
  },
  sssNumber: {
    type: String,
  },
  philhealthNumber: {
    type: String,
  },
  pagibigNumber: {
    type: String,
  },
  taxIDNumber: {
    type: String,
  },
  taxStatus: {
    type: String,
  },
  jobDescription: {
    type: String,
  },

  // New fields for employment information


  // New fields for education history
    elementarySchool: {
      type: String,
    },
    elementaryAdmissionYear: {
      type: String,
    },
    elementaryPassedOutYear: {
      type: String,
    },
    elementaryAwards: {
      type: String,
    },
    elementaryInstitution: {
      type: String,
    },
    elementaryPlace: {
      type: String,
    },
  
    highSchool: {
      type: String,
    },
    highSchoolAdmissionYear: {
      type: String,
    },
    highSchoolPassedOutYear: {
      type: String,
    },
    highSchoolAwards: {
      type: String,
    },
    highSchoolInstitution: {
      type: String,
    },
    highSchoolPlace: {
      type: String,
    },
  
    highestEducationLevel: {
      type: String,
    },
    educationSpecialization: {
      type: String,
    },
    educationAdmissionYear: {
      type: String,
    },
    educationPassedOutYear: {
      type: String,
    },
    educationAwards: {
      type: String,
    },
    educationInstitution: {
      type: String,
    },
    educationPlace: {
      type: String,
    },
    // companyNamu: {
    //   type: String,
    // },


  // New fields for education history

  // New fields for PREVIOUS WORK HISTORY


    companyNamu: {
      type: String,
    },
    departmentu: {
      type: String,
    },
    positionu: {
      type: String,
    },
    locationu: {
      type: String,
    },
    dateOfJoining: {
      type: String, // You might want to change this to 'date' if you're picking dates
    },
    dateOfLeaving: {
      type: String, // You might want to change this to 'date' if you're picking dates
    },



  // New fields for PREVIOUS WORK HISTORY


  // New fields for BANK ACCOUNT DETAILS

  accountName: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  shiftCode: {
    type: String,
  },
  bankAddress: {
    type: String,
  },

   // New fields for BANK ACCOUNT DETAILS End

    // New fields for DEPENDENT 

    dName: {
      type: String,
    },
    dAge: {
      type: String,
    },
    dAddress: {
      type: String,
    },
    dContactInfo: {
      type: String,
    },
  
    dName2: {
      type: String,
    },
    dAge2: {
      type: String,
    },
    dAddress2: {
      type: String,
    },
    dContactInfo2: {
      type: String,
    },
  
    dName3: {
      type: String,
    },
    dAge3: {
      type: String,
    },
    dAddress3: {
      type: String,
    },
    dContactInfo3: {
      type: String,
    },




    // New fields for DEPENDENT End


     // EMERGENCY CONTACT NUMBER Start
     ceName: {
      type: String,
    },
    ceRelationship: {
      type: String,
    },
    ceWorkPhone: {
      type: String,
    },
    ceMobileHomePhone: {
      type: String,
    },  
    ceEmail: {
      type: String,
    },
    ceAddress: {
      type: String,
    },

     // EMERGENCY CONTACT NUMBER End


     // HEALTH HISTORYR Start
     bloodType: {
      type: String,
    },  
    allergiesMedicalProblems: {
      type: String,
    },
    significantMedicalHistory: {
      type: String,
    },
    // HEALTH HISTORYR End

    // PROFESSIONAL REFERENCE CHECK  Start
    pname: {
      type: String,
    },  
    pcompany: {
      type: String,
    },
    pcontact: {
      type: String,
    },
    pemail: {
      type: String,
    },  
    pname1: {
      type: String,
    },
    pcompany1: {
      type: String,
    },
    pcontact1: {
      type: String,
    },  
    pemail1: {
      type: String,
    },
    // PROFESSIONAL REFERENCE CHECK  End



    // EMPLOYEE CHECKLIST Start
    signedContract: {
      type: String,
    },  
    jobDescription: {
      type: String,
    },
    validID: {
      type: String,
    },
    hiring: {
      type: String,
    },  
    SharedCV: {
      type: String,
    },
    cvSubmitted: {
      type: String,
    },
    PreviousEmployer: {
      type: String,
    },  
    Fitness: {
      type: String,
    },
    sssRegistration: {
      type: String,
    },
    phicRegistration: {
      type: String,
    },
    birRegistrationForm: {
      type: String,
    },  
    tinID: {
      type: String,
    },
    transcriptOfRecords: {
      type: String,
    },
    trainingCertificates: {
      type: String,
    },
    passportSizePhoto: {
      type: String,
    },  
    // EMPLOYEE CHECKLIST End
     

  // message: {
  //   type: String,
  //   required: [true, "Message is Required"],
  // },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;