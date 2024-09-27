# Resume Analyzer

This project is a full-stack application that processes candidate resumes in PDF format, uses a local LLM for analysis, and provides a front-end interface for visualization and interaction.

## Setup

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\\Scripts\\activate`
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Place your local LLM model in the `models` directory and update the `model_path` in `backend/llm_handler.py`.

5. Run the Flask server:
   ```
   python app.py
   ```

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install the required packages:
   ```
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Upload a PDF resume using the file input in the Resume Viewer component.
3. Once uploaded, you can ask questions about the resume using the Chat Interface component.

## Note

This is a basic template and may require further customization and error handling for production use. Ensure you have the necessary permissions and comply with data protection regulations when handling personal information from resumes.
```

This project template provides a starting point for building a resume analysis application with a local LLM and RAG system. You'll need to:

1. Implement proper error handling and security measures.
2. Optimize the PDF processing for larger files.
3. Enhance the LLM integration with more advanced RAG techniques.
4. Improve the user interface and add more features as needed.

Remember to respect privacy laws and obtain necessary permissions when handling personal data from resumes.
</assistant_response>