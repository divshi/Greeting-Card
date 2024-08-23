import React from "react";
import imageEid from "../assets/eid.png";
import imageEid2 from "../assets/eid (1).png";
import imageEid3 from "../assets/eid (2).png";
import imageEid4 from "../assets/eid (3).png";
import html2canvas from "html2canvas";
import BackCountainer from "./BackCountainer";

const ImageContainer = ({ name, message, background, setBackground }) => {
  return (
    <div className="text-center flex-1">
      <div
        className={`shadow-md rounded flex flex-col my-2 flex-1 h-96 relative ${background.includes('bg-gradient') ? background : ''}`}
        id="image-container"
        style={background.includes('url') ? { backgroundImage: background, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
      >
        {/* Background Images */}
        <img
          src={imageEid}
          alt="eid"
          className="absolute top-0 w-12 sm:w-10 md:w-16 lg:w-20 xl:w-15 right-32 rotate-[25deg]"
        />
        <img
          src={imageEid2}
          alt="eid"
          className="absolute w-100 h-100 top-0 right-0 rotate-[25deg] sm:rotate-[15deg]"
        />
        <img
          src={imageEid3}
          alt="eid"
          className="absolute top-0 left-0 rotate-[-25deg]"
        />
        <img
          src={imageEid4}
          alt="eid"
          className="absolute top-20 left-10 rotate-[-15deg] sm:rotate-[-25deg]"
        />

        {/* Text Container occupying 30% from the right */}
        <div className="flex justify-end items-center h-full w-full">
          <div className="w-[30%] h-full p-4 flex flex-col justify-center text-right bg-opacity-50 z-[2]">
            <h1 className="text-2xl font-bold sm:text-3xl text-primary leading-tight">
              HAPPY TEACHER'S DAY
            </h1>
            <p className="text-sm text-secondary mt-4 leading-tight">
              I wish my dear teacher{" "}
              <span className="text-primary font-bold FONT-ARABIC">{name}</span>{" "}
              a wonderful Teachers' Day filled with joy and good health throughout the year
            </p>
            <p className="text-sm text-secondary mt-4 leading-tight">{message}</p>
          </div>
        </div>
      </div>

      <BackCountainer background={background} setBackground={setBackground} />
    </div>
  );
};

const FormContainer = ({
  handleNameChange,
  name,
  handleMessageChange,
  message,
  handleGenerateImage,
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 flex-1 mx-4">
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-left placeholder-right mt-4 p-4"
        placeholder="Enter your name"
        onChange={handleNameChange}
        value={name}
      />
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-left placeholder-right mt-4 h-40"
        placeholder="Enter your message"
        onChange={handleMessageChange}
        value={message}
      ></textarea>

      <button
        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring mt-4"
        type="button"
        onClick={handleGenerateImage}
      >
        Download the image<i className="ml-2 text-sm fas fa-download"></i>
      </button>
    </div>
  );
};

function Home({ handlePartyModeClick }) {
  const [name, setName] = React.useState("Name");
  const [message, setMessage] = React.useState("");
  const [background, setBackground] = React.useState("bg-gradient-135");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleGenerateImage = () => {
    const element = document.getElementById("image-container");
    html2canvas(element).then((canvas) => {
      const link = document.createElement("a");
      link.download = "image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });

    handlePartyModeClick();
  };

  return (
    <div className="flex justify-center items-center h-screen flex-wrap min-h-screen min-w-0 mx-10 px-10">
      <ImageContainer
        background={background}
        name={name}
        message={message}
        setBackground={setBackground}
      />
      <FormContainer
        handleNameChange={handleNameChange}
        handleMessageChange={handleMessageChange}
        name={name}
        message={message}
        handleGenerateImage={handleGenerateImage}
      />
    </div>
  );
}

export default Home;
