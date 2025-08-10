import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import API from "../apis/BaseApi";

function Form() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUrl("");

    try {
      const response = await API.post("/api/shorten", {
        orginalURL: url,
      });
      // console.log(response.data.data.shortURL);
      let shortURL = response.data.data.shortURL;
      setShortUrl(shortURL);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="w-full max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-lg shadow-md mx-4"
      >
        <input
          type="text"
          placeholder="Enter URL to shorten..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-6 py-4 text-gray-700 placeholder-gray-400 rounded-lg sm:rounded-r-none sm:rounded-l-lg focus:outline-none "
          required
        />
        <button
          type="submit"
          className="w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded-lg flex items-center justify-center"
          aria-label="Shorten URL"
        >
          <FiSend size={20} />
        </button>
      </form>

      {/* Show short URL below input */}
      {shortUrl && (
  <div className="flex justify-center pt-6">
    <p className="font-bold mr-2">Short URL:</p>
    <a
       href={shortUrl}  // no /api here
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline break-all"
    >
        {shortUrl}
    </a>
  </div>
)}

    </div>
  );
}

export default Form;
