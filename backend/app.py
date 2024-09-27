from flask import Flask, request, jsonify
from pdf_processor import process_pdf
from llm_handler import query_llm
from database import store_resume, get_resume

app = Flask(__name__)

@app.route("/upload", methods=["POST"])
def upload_resume():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    if file and file.filename.endswith(".pdf"):
        processed_text = process_pdf(file)
        resume_id = store_resume(processed_text)
        return jsonify({"message": "Resume uploaded successfully", "id": resume_id}), 200
    return jsonify({"error": "Invalid file format"}), 400

@app.route("/query", methods=["POST"])
def query_resume():
    data = request.json
    resume_id = data.get("resume_id")
    query = data.get("query")
    if not resume_id or not query:
        return jsonify({"error": "Missing resume_id or query"}), 400
    resume_text = get_resume(resume_id)
    response = query_llm(resume_text, query)
    return jsonify({"response": response}), 200

if __name__ == '__main__':
    app.run(debug=True)