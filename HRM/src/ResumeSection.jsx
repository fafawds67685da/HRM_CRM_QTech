import React, { useState } from 'react'

function ResumeSection() {
  const [resumes, setResumes] = useState([])
  const [upload, setUpload] = useState(null)

  const handleUpload = () => {
    if (upload) {
      setResumes([...resumes, upload.name])
      setUpload(null)
    }
  }

  return (
    <div className="card">
      <h2>Resume Upload</h2>
      <input type="file" onChange={(e) => setUpload(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <div className="uploaded-list">
        <h3>Uploaded Resumes</h3>
        <ul>
          {resumes.map((name, idx) => (
            <li key={idx}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResumeSection
