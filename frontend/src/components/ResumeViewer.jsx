import React, { useState } from "react";

export default function ResumeViewer({ onUpload }) {
    const [pdfUrl, setPdfUrl] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            const url = URL.createObjectURL(file);
            setPdfUrl(url);
            onUpload(file);
        }
    };

    return (
        <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Resume Viewer</h2>
            <input type="file" accept=".pdf" onChange={handleFileChange} className="mb-4" />
            {pdfUrl && (
                <iframe src={pdfUrl} width="100%" height="600px" title="Resume PDF Viewer" />
            )}
        </div>
    );
}