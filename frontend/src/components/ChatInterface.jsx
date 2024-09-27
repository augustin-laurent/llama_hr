import React, { useState } from "react";

export default function ChatInterface({ resumeId }) {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!resumeId) {
            alert("Please upload a resume first");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/query", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ resume_id: resumeId, query }),
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.error("Error querying LLM:", error);
        }
    };

    return (
        <div className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Chat with Resume</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask a question about the resume"
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                    Ask
                </button>
            </form>
            {response && (
                <div className="bg-gray-100 p-4 rounded">
                    <h3 className="font-semibold">Response:</h3>
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
}