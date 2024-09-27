import React, { useState } from "react";
import ResumeViewer from "./components/ResumeViewer";
import ChatInterface from "./components/ChatInterface";

export default function App() {
  const [currentResumeId, setCurrentResumeId] = useState(null);

  const handleResumeUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setCurrentResumeId(data.id);
    } catch (error) {
      console.error("Error uploading resume:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Analyzer</h1>
      <div className="grid grid-cols-2 gap-4">
        <ResumeViewer onUpload={handleResumeUpload} />
        <ChatInterface resumeId={currentResumeId} />
      </div>
    </div>
  );
}