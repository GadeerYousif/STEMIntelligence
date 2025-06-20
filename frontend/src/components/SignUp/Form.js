import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    requesterName: '',
    email: '',
    phoneNum: '',
    grade: '',
    studentName: '',
    additionalInfo: '',
  });
  
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
    const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
    const response = await fetch(`${API_BASE_URL}/api/tutor-requests/create`, {

  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});

const result = await response.json();
console.log('Backend response:', result);

if (response.ok) {
  setStatus('✅ Request submitted successfully!');
  // clear form...
} else {
  setStatus(`❌ Submission failed: ${result.message || 'Try again.'}`);
}
    } catch (error) {
      console.error(error);
      setStatus('❌ An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>📬 Contact Me</h2>

      <label>
        Your Name:
        <input type="text" name="requesterName" value={formData.requesterName} onChange={handleChange} required />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Phone Number:
        <input type="tel" name="phoneNum" value={formData.phoneNum} onChange={handleChange} />
      </label>

      <label>
        Student's Name:
        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} />
      </label>

      <label>
        Grade:
        <input type="text" name="grade" value={formData.grade} onChange={handleChange} />
      </label>

      <label>
        Additional Info:
        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
      </label>

      <button type="submit">Submit</button>

      <p className="status">{status}</p>
    </form>
  );
}