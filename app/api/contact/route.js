import { NextResponse } from "next/server";
import Contact from "@/app/models/contact";
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";


export async function POST(req) {
  const {
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
  } = await req.json();

  const { signedContract } = checkList;
  console.log("CompanyName from previous:", signedContract);
  console.log("Previous Object:", education);
  try {
    await connectDB();
    await Contact.create({
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
      companyName: workinfo.companyName,
      department: workinfo.department,
      position: workinfo.position,
      workEmail: workinfo.workEmail,
      dateHired: workinfo.dateHired,
      employeeStatus: workinfo.employeeStatus,
      phoneNumber: workinfo.phoneNumber,
      positionLevel: workinfo.positionLevel,
      companyAddress: workinfo.companyAddress,
      sssNumber: workinfo.sssNumber,
      philhealthNumber: workinfo.philhealthNumber,
      pagibigNumber: workinfo.pagibigNumber,
      taxIDNumber: workinfo.taxIDNumber,
      taxStatus: workinfo.taxStatus,
      jobDescription: workinfo.jobDescription,
      elementarySchool: education.elementarySchool,
      elementaryAdmissionYear: education.elementaryAdmissionYear,
      elementaryPassedOutYear: education.elementaryPassedOutYear,
      elementaryAwards: education.elementaryAwards,
      elementaryInstitution: education.elementaryInstitution,
      elementaryPlace: education.elementaryPlace,
      highSchool: education.highSchool,
      highSchoolAdmissionYear: education.highSchoolAdmissionYear,
      highSchoolPassedOutYear: education.highSchoolPassedOutYear,
      highSchoolAwards: education.highSchoolAwards,
      highSchoolInstitution: education.highSchoolInstitution,
      highSchoolInstitution: education.highSchoolInstitution,
      highestEducationLevel: education.highestEducationLevel,
      educationSpecialization: education.educationSpecialization,
      educationAdmissionYear: education.educationAdmissionYear,
      educationPassedOutYear: education.educationPassedOutYear,
      educationAwards: education.educationAwards,
      educationInstitution: education.educationInstitution,
      educationPlace: education.educationPlace,
      companyNamu: previous.companyNamu,
      departmentu: previous.departmentu,
      positionu: previous.positionu,
      locationu: previous.locationu,
      dateOfJoining: previous.dateOfJoining,
      dateOfLeaving: previous.dateOfLeaving,
      accountName: bank.accountName,
      accountNumber: bank.accountNumber,
      shiftCode: bank.shiftCode,
      bankAddress: bank.bankAddress,

      dName: dependent.dName,
      dAge: dependent.dAge,
      dAddress: dependent.dAddress,
      dContactInfo: dependent.dContactInfo,
      dName2: dependent.dName2,
      dAge2: dependent.dAge2,
      dAddress2: dependent.dAddress2,
      dContactInfo2: dependent.dContactInfo2,
      dName3: dependent.dName3,
      dAge3: dependent.dAge3,
      dAddress3: dependent.dAddress3,
      dContactInfo3: dependent.dContactInfo3,
      ceName: emergency.ceName,
      ceRelationship: emergency.ceRelationship,
      ceWorkPhone: emergency.ceWorkPhone,
      ceMobileHomePhone: emergency.ceMobileHomePhone,
      ceEmail: emergency.ceEmail,
      ceAddress: emergency.ceAddress,

      bloodType: health.bloodType,
      allergiesMedicalProblems: health.allergiesMedicalProblems,
      significantMedicalHistory: health.significantMedicalHistory,

      pname :professionalref.pname,
      pcompany :professionalref.pcompany,
      pcontact :professionalref.pcontact,
      pemail :professionalref.pemail,
      pname1 :professionalref.pname1,
      pcompany1 :professionalref.pcompany1,
      pcontact1 :professionalref.pcontact1,
      pemail1 :professionalref.pemail1,

      signedContract: checkList.signedContract,
      jobDescription: checkList.jobDescription,
      validID: checkList.validID,
      hiring: checkList.hiring,
      SharedCV: checkList.SharedCV,
      cvSubmitted: checkList.cvSubmitted,
      PreviousEmployer: checkList.PreviousEmployer,
      Fitness: checkList.Fitness,
      sssRegistration: checkList.sssRegistration,
      phicRegistration: checkList.phicRegistration,
      birRegistrationForm: checkList.birRegistrationForm,
      tinID: checkList.tinID,
      transcriptOfRecords: checkList.transcriptOfRecords,
      trainingCertificates: checkList.trainingCertificates,
      passportSizePhoto: checkList.passportSizePhoto,



      // companyNamu: previous.companyNamu,
    });
    return NextResponse.json({
      msg: ["Message Sent Succesfully"],
      success: true,
      
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      // console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["hi from api"] });
    }
  }
}
