import React, { useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUploadForm = () => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("text", text);
    try {
      const res = await axios.post("http://localhost:8000/upload", formData);
      console.log(res.data);
      toast.success("Image uploaded successfully!");
      // display success message or redirect to homepage
    } catch (err) {
      console.log(err);
      toast.error("Error uploading image. Please try again.");
      // display error message
    }
  };

  const handleFileChange = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <label>
          Image:
          <Dropzone onDrop={handleFileChange}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {file ? (
                  <p>{file.name}</p>
                ) : (
                  <p>Drag and drop an image here or click to select a file</p>
                )}
              </div>
            )}
          </Dropzone>
        </label>
        <label>
          Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ImageUploadForm;
