import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    requesterName: '',
    email: '',
    phoneNum: '',
    studentName: '',
    grade: '',
    subject: '',
    additionalInfo: '',
  });
  
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation function - 10 digits or 10 digits with dash
  const validatePhone = (phone) => {
    if (!phone) return true; // Phone is optional
    const phoneRegex = /^(\d{10}|\d{3}-\d{3}-\d{4})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, [name]: 'Please enter a valid email address' }));
      }
    }
    
    if (name === 'phoneNum' && value) {
      if (!validatePhone(value)) {
        setErrors(prev => ({ ...prev, [name]: 'Please enter a valid phone number (10 digits or XXX-XXX-XXXX format)' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    const newErrors = {};
    
    if (!formData.requesterName.trim()) {
      newErrors.requesterName = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }
    
    if (!formData.grade) {
      newErrors.grade = 'Grade level is required';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (formData.phoneNum && !validatePhone(formData.phoneNum)) {
      newErrors.phoneNum = 'Please enter a valid phone number (10 digits or XXX-XXX-XXXX format)';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('❌ Please fix the errors above and try again.');
      return;
    }

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

  // Determine status class based on status content
  const getStatusClass = () => {
    if (status.includes('✅')) return 'success';
    if (status.includes('❌')) return 'error';
    if (status.includes('Submitting')) return 'submitting';
    return '';
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>📬 Contact Me</h2>

        <label>
          Your Name: *
          <input 
            type="text" 
            name="requesterName" 
            value={formData.requesterName} 
            onChange={handleChange} 
            required 
            placeholder="Enter your full name"
            className={errors.requesterName ? 'error' : ''}
          />
          {errors.requesterName && <span className="error-message">{errors.requesterName}</span>}
        </label>

        <label>
          Email: *
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            onBlur={handleBlur}
            required 
            placeholder="Enter your email address"
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </label>

        <label>
          Phone Number:
          <input 
            type="tel" 
            name="phoneNum" 
            value={formData.phoneNum} 
            onChange={handleChange} 
            onBlur={handleBlur}
            placeholder="Enter your phone number (optional) - 10 digits or XXX-XXX-XXXX"
            className={errors.phoneNum ? 'error' : ''}
          />
          {errors.phoneNum && <span className="error-message">{errors.phoneNum}</span>}
        </label>

        <label>
          Student's Name: *
          <input 
            type="text" 
            name="studentName" 
            value={formData.studentName} 
            onChange={handleChange} 
            required
            placeholder="Enter student's name"
            className={errors.studentName ? 'error' : ''}
          />
          {errors.studentName && <span className="error-message">{errors.studentName}</span>}
        </label>

        <label>
          Grade: *
          <select 
            name="grade" 
            value={formData.grade} 
            onChange={handleChange}
            className={`grade-select ${errors.grade ? 'error' : ''}`}
            required
          >
            <option value="">Select grade level</option>
            <option value="1">Grade 1</option>
            <option value="2">Grade 2</option>
            <option value="3">Grade 3</option>
            <option value="4">Grade 4</option>
            <option value="5">Grade 5</option>
            <option value="6">Grade 6</option>
            <option value="7">Grade 7</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
            <option value="university">University</option>
          </select>
          {errors.grade && <span className="error-message">{errors.grade}</span>}
        </label>

        <label>
          Subject: *
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required
            placeholder="Enter subject (e.g., Math, Science, Coding)"
            className={errors.subject ? 'error' : ''}
          />
          {errors.subject && <span className="error-message">{errors.subject}</span>}
        </label>

        <label>
          Additional Information:
          <textarea 
            name="additionalInfo" 
            value={formData.additionalInfo} 
            onChange={handleChange} 
            placeholder="Tell us about your tutoring needs, specific topics, or any other relevant information..."
          />
        </label>

        <button type="submit">Submit Request</button>

        {status && <p className={`status ${getStatusClass()}`}>{status}</p>}
      </form>
    </div>
  );
}