"use client";


import { useState } from "react";

export default function OfficeContactForm() {

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(fullname);
        console.log(email);
        console.log(message);


        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname,
                email,
                message,
                lastname,
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
        <div>
          <label htmlFor="fullname">Full Namee</label>
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

        

        <div>
            <label htmlFor="message">Message</label>
            <textarea onChange={(e)=> {setMessage(e.target.value)}} id="message" value={message} placeholder="type your message here" className="h-32"></textarea>
        </div>
        <button type="submit" className="bg-green-700 p-3 text-white font-bold">Send</button>

        




















        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" className="input" />
          </div>
          <div className="flex-1">
            <label htmlFor="middleName">Middle name</label>
            <input type="text" id="middleName" name="middleName" className="input" />
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id="lastName" name="lastName" className="input" />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" className="input" />
          </div>
          <div className="flex-1">
            <label htmlFor="contactNumber">Contact number</label>
            <input type="tel" id="contactNumber" name="contactNumber" className="input" />
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" name="email" className="input" />
        </div>

        <div className="flex space-x-4">
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

          <div className="flex-1">
            <label htmlFor="dob">Date of Birth (dd/mm/yy)</label>
            <input type="text" id="dob" name="dob" className="input" />
          </div>
        </div>

        <div className="flex-1">
          <label>Marital Status</label>
          <div className="flex items-center space-x-2">
            <input type="radio" id="single" name="maritalStatus" value="single" />
            <label htmlFor="single">Single</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="married" name="maritalStatus" value="married" />
            <label htmlFor="married">Married</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="divorced" name="maritalStatus" value="divorced" />
            <label htmlFor="divorced">Divorced</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="widowed" name="maritalStatus" value="widowed" />
            <label htmlFor="widowed">Widowed</label>
          </div>
        </div>


      </form>

      <div className="bg-slate-100 flex flex-col">
        {error && error.map((e) => <div className={`${success ? "text-green-800" : "text-red-600"} px-5 py-2`}>{e}</div>)}
        
      </div>
      {console.log(`hello${gendery}`)}
    </>
  );
}
