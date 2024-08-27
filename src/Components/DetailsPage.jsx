import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCopy } from "react-icons/fa";

function DetailsPage() {
  const [studentName, setStudentName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(captcha);
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.studentName = studentName ? "" : "Student Name is required.";
    tempErrors.mobileNumber = mobileNumber.match(/^[0-9]{10}$/) ? "" : "Valid 10-digit Mobile Number is required.";
    tempErrors.studentClass = studentClass ? "" : "Class is required.";
    tempErrors.address = address ? "" : "Address is required.";
    tempErrors.email = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? "" : "Valid Email is required.";
    tempErrors.inputCaptcha = inputCaptcha === captcha ? "" : "CAPTCHA does not match.";
    
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === ""); // Returns true if all errors are empty
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate("/home");
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleCopyCaptcha = () => {
    navigator.clipboard.writeText(captcha);
    alert("CAPTCHA copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Student Details</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.studentName && "border-red-500"}`}
            placeholder="Enter Student Name"
          />
          {errors.studentName && <p className="text-red-500 text-xs italic">{errors.studentName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.mobileNumber && "border-red-500"}`}
            placeholder="Enter Mobile Number"
          />
          {errors.mobileNumber && <p className="text-red-500 text-xs italic">{errors.mobileNumber}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Class</label>
          <input
            type="text"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.studentClass && "border-red-500"}`}
            placeholder="Enter Class"
          />
          {errors.studentClass && <p className="text-red-500 text-xs italic">{errors.studentClass}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.address && "border-red-500"}`}
            placeholder="Enter Address"
          />
          {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email && "border-red-500"}`}
            placeholder="Enter Email"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">CAPTCHA</label>
          <div className="flex items-center">
            <input
              type="text"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.inputCaptcha && "border-red-500"}`}
              placeholder="Enter CAPTCHA"
            />
            <div
              className="ml-2 px-4 py-2 border rounded bg-gray-200 cursor-pointer flex items-center"
              onClick={handleCopyCaptcha}
            >
              <span className="mr-2">{captcha}</span>
              <FaCopy />
            </div>
          </div>
          {errors.inputCaptcha && <p className="text-red-500 text-xs italic">{errors.inputCaptcha}</p>}
        </div>

        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
            type="submit"
          >
            <span className="mr-2">Start</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default DetailsPage;
