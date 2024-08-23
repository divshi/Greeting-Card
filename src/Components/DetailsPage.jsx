import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCopy } from "react-icons/fa"; // Import icon for copy functionality

function DetailsPage() {
  const [studentName, setStudentName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [address, setAddress] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const navigate = useNavigate();

  const generateCaptcha = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(captcha);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputCaptcha === captcha) {
      navigate("/home"); // Navigate to the Home page on successful CAPTCHA validation
    } else {
      alert("Invalid CAPTCHA. Please try again.");
      generateCaptcha(); // Regenerate CAPTCHA if validation fails
    }
  };

  useEffect(() => {
    generateCaptcha(); // Generate CAPTCHA when the component mounts
  }, []);

  const handleCopyCaptcha = () => {
    navigator.clipboard.writeText(captcha);
    alert("CAPTCHA copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Student Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Student Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Class</label>
          <input
            type="text"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Class"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Address"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">CAPTCHA</label>
          <div className="flex items-center">
            <input
              type="text"
              value={inputCaptcha}
              onChange={(e) => setInputCaptcha(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
            type="submit"
            onClick={handleSubmit}
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
