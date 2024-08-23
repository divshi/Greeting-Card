import React from "react";
import test1 from "../assets/img1.png";
import test2 from "../assets/img1.png";
import test3 from "../assets/img1.png";
import test4 from "../assets/img1.png";

const gradients = [
  "bg-gradient-135",
  "bg-gradient-225",
  "bg-gradient-315",
  "bg-gradient-45",
];

const images = [
  `url(${test1})`,
  `url(${test2})`,
  `url(${test3})`,
  `url(${test4})`,
];

function BackCountainer({ setBackground }) {
  return (
    <div className="w-3/4 mx-auto my-4">
      {/* Render Gradients */}
      <div className="flex flex-wrap justify-center items-center mb-4">
        {gradients.map((item, index) => (
          <div
            key={index}
            className={`w-24 h-12 mx-2 border border-gray-300 rounded-full shadow-2xl flex justify-center items-center cursor-pointer ${item}`}
            onClick={() => setBackground(item)}
          ></div>
        ))}
      </div>

      {/* Render Images */}
      <div className="flex flex-wrap justify-center items-center">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-24 h-12 mx-2 border border-gray-300 rounded-full shadow-2xl flex justify-center items-center cursor-pointer"
            style={{
              backgroundImage: item,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => setBackground(item)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BackCountainer;
