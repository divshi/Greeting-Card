import React from "react";
import test1 from "../assets/img1.png";
import test2 from "../assets/img2.png";
import test3 from "../assets/img3.png";
import test4 from "../assets/img4.png";


const images = [
  `url(${test1})`,
  `url(${test2})`,
  `url(${test3})`,
  `url(${test4})`
];

function BackCountainer({ setBackground }) {
  return (
    <div className="w-full flex justify-center py-4">
      {/* Container to handle scrolling */}
      <div className="flex space-x-4 overflow-x-auto">
        {images.map((item, index) => (
          <div
            key={index}
            className="w-24 h-12 border border-gray-300 rounded-full shadow-lg flex justify-center items-center cursor-pointer"
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
