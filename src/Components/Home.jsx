import React, { useEffect, useState } from "react";
// import imageEid from "../assets/eid.png";
// import imageEid2 from "../assets/eid (1).png";
// import imageEid3 from "../assets/eid (2).png";
// import imageEid4 from "../assets/eid (3).png";
import logo1 from "../assets/logo 1.png";

import img1 from "../assets/img1.png"; // Importing the default background image
import BackCountainer from "./BackCountainer";

const attributesList = [
  "Dedicated", "Passionate", "Patient", "Knowledgeable", "Inspiring",
  "Empathetic", "Supportive", "Understanding", "Encouraging", "Approachable",
  "Creative", "Nurturing", "Motivating", "Thoughtful", "Resourceful",
  "Compassionate", "Insightful", "Enthusiastic", "Attentive", "Organized",
  "Kind-hearted", "Adaptable", "Dependable", "Wise", "Respectful",
  "Engaging", "Fair", "Focused", "Diligent", "Caring", "Innovative",
  "Articulate", "Disciplined", "Positive", "Considerate", "Flexible",
  "Committed", "Empowering", "Skillful", "Trustworthy", "Open-minded",
  "Energetic", "Friendly", "Collaborative", "Responsible", "Visionary",
  "Detail-oriented", "Constructive", "Intelligent", "Principled", "Open",
  "Devoted", "Hardworking", "Charismatic", "Perseverant", "Communicative",
  "Genuine", "Curious", "Optimistic", "Resilient", "Gentle", "Reliable",
  "Stimulating", "Observant", "Inclusive", "Sharp", "Warm", "Receptive",
  "Confident", "Dynamic", "Poised", "Courageous", "Calm", "Driven",
  "Humorous", "Analytical", "Fair-minded", "Purposeful", "Balanced",
  "Precise", "Well-read", "Engaged", "Selfless", "Humble",
];

const ImageContainer = ({ name, message, background, setBackground, handleGenerateImage, imageUrl, aiGeneratedMessage }) => {
  const containerStyle = {
    backgroundImage: imageUrl ? `url(${imageUrl})` : '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '70vh', // Increase height as needed
    width: '100%',
  };

  return (
    <div className="text-center flex-1">
      <div
        className={`shadow-md rounded flex flex-col my-2 flex-1 relative ${background.includes('bg-gradient') ? background : ''}`}
        id="image-container"
        style={containerStyle}
      >
        <img src={logo1} alt="logo" className="absolute top-0 w-12 sm:w-10 md:w-16 lg:w-20 xl:w-15 right-100 rotate-[0deg]" />

        <div className="flex flex-col justify-center items-center mt-6 w-full p-4">
          <div className="bg-white bg-opacity-20 p-4 rounded">
            <h1 className="text-1xl font-bold sm:text-2xl text-black leading-tight">
              HAPPY TEACHER'S DAY
            </h1>
            <p className="text-sm text-black leading-tight">
              I wish my dear teacher <span className="text-black font-bold">{name}</span>!!! a wonderful Teachers' Day filled with joy and good health throughout the year.
            </p>
            <p className="text-sm text-black mt-2 leading-tight">{message}</p>
          </div>
        </div>

        {aiGeneratedMessage && (
          <div
            className="absolute bottom-0 w-full p-4 bg-white bg-opacity-20 rounded"
            style={{ height: '30%' }}
          >
            <p className="text-sm text-black leading-tight text-center">{aiGeneratedMessage}</p>
          </div>
        )}
      </div>

      <a
        href={imageUrl || '#'}
        download="generated_image.png"
        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring mt-4"
        onClick={(e) => {
          if (!imageUrl) {
            e.preventDefault();
            alert('Image URL is not set. Please generate an image first.');
          }
        }}
      >
        Download the image<i className="ml-2 text-sm fas fa-download"></i>
      </a>
    </div>
  );
};


const FormContainer = ({
  handleNameChange,
  name,
  attributes,
  setAttributes,
  language,
  setLanguage,
  handleGenerateImage,
}) => {
  const handleAttributeSelect = (e) => {
    const value = e.target.value;
    if (attributes.length < 5 && !attributes.includes(value) && value) {
      setAttributes([...attributes, value]);
    }
  };

  const removeAttribute = (attribute) => {
    setAttributes(attributes.filter(attr => attr !== attribute));
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 flex-1 mx-4">
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-left placeholder-right mt-4 p-4"
        placeholder="Enter your name"
        onChange={handleNameChange}
        value={name}
      />

      <div className="mt-4">
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
          onChange={handleAttributeSelect}
          value="" // Ensure no attribute is pre-selected
        >
          <option value="" disabled>Select Attribute</option>
          {attributesList
            .filter(attr => !attributes.includes(attr))
            .map(attr => (
              <option key={attr} value={attr}>{attr}</option>
            ))}
        </select>
      </div>

      <div className="mt-4">
        {attributes.map(attr => (
          <span key={attr} className="inline-block bg-gray-200 px-3 py-1 rounded-full text-gray-700 mr-2 mb-2">
            {attr}
            <button
              type="button"
              className="ml-2 text-red-500"
              onClick={() => removeAttribute(attr)}
            >
              &times;
            </button>
          </span>
        ))}
      </div>

      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
        onChange={(e) => setLanguage(e.target.value)}
        value={language}
      >
        <option value="" disabled>Select Language</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>

      {/* Removed theme dropdown as only "Teacher's Day" is the required option */}
      
      <button
        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring mt-4"
        type="button"
        onClick={handleGenerateImage}
      >
        Generate Image
      </button>
    </div>
  );
};

function Home({ handlePartyModeClick }) {
  const [name, setName] = useState("");
  const [attributes, setAttributes] = useState([]);
  const [language, setLanguage] = useState("");
  const [theme, setTheme] = useState("");
  const [background, setBackground] = useState(`url(${img1})`);
  const [message, setMessage] = useState(""); // Added state for message
  const [imageUrl, setImageUrl] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [aiGeneratedMessage, setAiGeneratedMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value); // Added message change handler

  const handleGenerateImage = () => {
    fetch('https://cardcreator.walkingtree.tech/generate_greeting_card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: name.trim(),           // Updated parameter name
        Attributes: attributes,      // Updated parameter name
        Language: language,          // Updated parameter name
        Theme: "Teacher's Day",      // Updated parameter name
      }),
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(errData => {
          console.error('Error:', errData);
          alert(`Error: ${errData.ErrorMessage || "Something went wrong"}`);
          throw new Error(`HTTP error! Status: ${response.status}`);
        });
      }
      return response.json();
    })
    .then(data => {
      console.log('API Response:', data);
      if (data.StatusCode === "200") {
        setImageUrl(data.ImageURLs[0] || '');
        setAdditionalImages(data.ImageURLs || []);
        setAiGeneratedMessage(data.TextContent[0] || ''); // Set AI generated message
      } else {
        console.error('Error:', data.ErrorMessage);
        alert('Failed to generate image. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error generating image:', error);
      alert('An error occurred. Please try again.');
    });
  };
  
  
  
  useEffect(() => {
    setName("");
    setAttributes([]);
    setLanguage("");
    setTheme("");
    setBackground(`url(${img1})`);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen flex-wrap min-h-screen min-w-0 mx-10 px-10">
      <FormContainer
        handleNameChange={handleNameChange}
        name={name}
        message={message}
        handleMessageChange={handleMessageChange}
        attributes={attributes}
        setAttributes={setAttributes}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
        handleGenerateImage={handleGenerateImage}
      />
      <ImageContainer
        background={background}
        name={name}
        message={message}
        setBackground={setBackground}
        handleGenerateImage={handleGenerateImage}
        imageUrl={imageUrl}
        aiGeneratedMessage={aiGeneratedMessage} // Pass aiGeneratedMessage
      />
    </div>
  );

}

export default Home;
