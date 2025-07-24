import React, { useState, useRef } from "react";
import "./styles/VideoSolutionForm.css";

export default function VideoSolutionForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    subject: '',
    topic: '',
    problemDescription: '',
  });
  
  const [attachedImages, setAttachedImages] = useState([]);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const fileInputRef = useRef(null);

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      const isValidType = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB limit
      if (!isValidType) {
        alert(`${file.name} is not a valid image type. Please upload JPEG, PNG, GIF, or WebP files.`);
        return false;
      }
      if (!isValidSize) {
        alert(`${file.name} is too large. Please upload files smaller than 5MB.`);
        return false;
      }
      return true;
    });
    if (validFiles.length + attachedImages.length > 5) {
      alert('You can only upload up to 5 images total.');
      return;
    }
    const newImages = validFiles.map(file => ({
      file,
      id: Date.now() + Math.random(),
      preview: URL.createObjectURL(file)
    }));
    setAttachedImages(prev => [...prev, ...newImages]);
  };

  const removeImage = (imageId) => {
    setAttachedImages(prev => {
      const imageToRemove = prev.find(img => img.id === imageId);
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }
      return prev.filter(img => img.id !== imageId);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Student name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.topic.trim()) {
      newErrors.topic = 'Topic is required';
    }
    if (!formData.problemDescription.trim()) {
      newErrors.problemDescription = 'Problem description is required';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('❌ Please fix the errors above and try again.');
      return;
    }
    setIsSubmitting(true);
    setStatus('Submitting your video solution request...');
    try {
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });
      attachedImages.forEach((image) => {
        submitData.append(`images`, image.file);
      });
      const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_BASE_URL}/api/tutor-requests/create`, {
        method: 'POST',
        body: submitData,
      });
      const result = await response.json();
      if (response.ok) {
        setStatus('✅ Video solution request submitted successfully! I\'ll get back to you soon.');
        setFormData({
          studentName: '',
          email: '',
          subject: '',
          topic: '',
          problemDescription: '',
        });
        setAttachedImages([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setStatus(`❌ Submission failed: ${result.message || 'Please try again.'}`);
      }
    } catch (error) {
      setStatus('❌ An error occurred while submitting your request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusClass = () => {
    if (status.includes('✅')) return 'video-solution-success';
    if (status.includes('❌')) return 'video-solution-error';
    if (status.includes('Submitting')) return 'video-solution-submitting';
    return '';
  };

  return (
    <div className="video-solution-bg">
      <form onSubmit={handleSubmit} className="video-solution-container">
        <h2 className="video-solution-title">🎥 Request Video Solution</h2>
        <p className="video-solution-subtitle">
          Need help with a specific problem? Send me the details and I'll create a personalized video solution for you!
        </p>
        <div className="video-solution-form-grid">
          <label className="video-solution-label">
            Student's Name: *
            <input 
              type="text" 
              name="studentName" 
              value={formData.studentName} 
              onChange={handleChange} 
              required 
              placeholder="Enter student's name"
              className={`video-solution-input${errors.studentName ? ' video-solution-input-error' : ''}`}
            />
            {errors.studentName && <span className="video-solution-error-message">{errors.studentName}</span>}
          </label>
          <label className="video-solution-label">
            Email: *
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Enter your email address"
              className={`video-solution-input${errors.email ? ' video-solution-input-error' : ''}`}
            />
            {errors.email && <span className="video-solution-error-message">{errors.email}</span>}
          </label>
          <label className="video-solution-label">
            Subject: *
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              placeholder="e.g., Math, Science, English"
              className={`video-solution-input${errors.subject ? ' video-solution-input-error' : ''}`}
            />
            {errors.subject && <span className="video-solution-error-message">{errors.subject}</span>}
          </label>
          <label className="video-solution-label">
            Topic: *
            <input 
              type="text" 
              name="topic" 
              value={formData.topic} 
              onChange={handleChange} 
              required 
              placeholder="e.g., Quadratic Equations, Photosynthesis"
              className={`video-solution-input${errors.topic ? ' video-solution-input-error' : ''}`}
            />
            {errors.topic && <span className="video-solution-error-message">{errors.topic}</span>}
          </label>
        </div>
        <label className="video-solution-label">
          Problem Description: *
          <textarea 
            name="problemDescription" 
            value={formData.problemDescription} 
            onChange={handleChange} 
            required 
            placeholder="Describe the problem or question in detail. Be as specific as possible to help me create the most helpful video solution."
            className={`video-solution-textarea${errors.problemDescription ? ' video-solution-input-error' : ''}`}
            rows="6"
          />
          {errors.problemDescription && <span className="video-solution-error-message">{errors.problemDescription}</span>}
        </label>
        <div className="video-solution-image-section">
          <label className="video-solution-label">
            Attach Images (Optional):
            <div className="video-solution-file-upload">
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleImageUpload}
                multiple
                accept="image/*"
                className="video-solution-file-input"
              />
              <button 
                type="button" 
                onClick={() => fileInputRef.current?.click()}
                className="video-solution-upload-btn"
              >
                📷 Choose Images
              </button>
              <span className="video-solution-file-info">
                Upload up to 5 images (JPEG, PNG, GIF, WebP) - Max 5MB each
              </span>
            </div>
          </label>
          {attachedImages.length > 0 && (
            <div className="video-solution-image-preview">
              <h4>Attached Images ({attachedImages.length}/5):</h4>
              <div className="video-solution-image-grid">
                {attachedImages.map((image) => (
                  <div key={image.id} className="video-solution-image-item">
                    <img 
                      src={image.preview} 
                      alt={`Preview of uploaded file: ${image.file.name}`} 
                      className="video-solution-preview-img"
                    />
                    <button 
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="video-solution-remove-btn"
                    >
                      ✕
                    </button>
                    <span className="video-solution-image-name">{image.file.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <button 
          type="submit" 
          className="video-solution-submit-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : '🎬 Request Video Solution'}
        </button>
        {status && (
          <div className={`video-solution-status ${getStatusClass()}`}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
} 