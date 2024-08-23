import React from "react";
import test1 from "../assets/img1.png";
import test2 from "../assets/img2.png";
import test3 from "../assets/img3.png";
import test4 from "../assets/img4.png";
import test5 from "../assets/img5.png";


const images = [
  `url(${test1})`,
  `url(${test2})`,
  `url(${test3})`,
  `url(${test4})`,
  `url(${test5})`,
];

function BackCountainer({ setBackground }) {
  return (
    <div className="w-3/4 mx-auto my-4">
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
