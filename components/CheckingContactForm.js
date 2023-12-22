"use client";

import React, { useState } from "react";
// import { useRouter } from "next/router";
import CurrentAddress from "./CurrentAddress";
import PerminantAddress from "./PerminantAddress";

function CheckingContactForm() {
    // const router = useRouter();
    const [page, setPage] = useState(1);
  
    const [currentAddress, setCurrentAddress] = useState({
      blockLotNo: "",
      street: "",
    });
  
    const [permanentAddress, setPermanentAddress] = useState({
      salma: "",
      pstreet: "",
    });
  
    const handleChange = (field, value) => {
      if (page === 1) {
        setCurrentAddress((prev) => ({ ...prev, [field]: value }));
      } else {
        setPermanentAddress((prev) => ({ ...prev, [field]: value }));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(permanentAddress.salma);
    };
  
    const handleNextPage = () => {
      setPage(page + 1);
    };
  
    return (
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
        {page === 1 ? (
          <CurrentAddress onChange={handleChange} values={currentAddress} />
        ) : (
            <PerminantAddress onChange={handleChange} values={permanentAddress} />
        )}
  
        {page === 1 && (
          <button type="button" onClick={handleNextPage} className="bg-green-700 p-3 text-white font-bold">
            Next
          </button>
        )}
  
        {page === 2 && (
          <>
            <button type="submit" className="bg-green-700 p-3 text-white font-bold">
              Submit
            </button>
          </>
        )}
      </form>
    );
}

export default CheckingContactForm