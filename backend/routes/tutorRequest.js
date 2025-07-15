require('dotenv').config();
const express = require("express");
const connecToDatabase = require("../db");
const router = express.Router();
const axios = require('axios');
const multer = require('multer');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 5 // Max 5 files
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else { 
      cb(new Error('Only image files are allowed'), false);
    }
  }
});

// Ping endpoint to wake up the server
router.get("/ping", (req, res) => {
  res.status(200).json({ 
    message: "Server is awake!", 
    timestamp: new Date().toISOString(),
    status: "ready"
  });
});

// Helper function to determine request type and map fields
const mapRequestData = (req) => {
  const isVideoSolution = req.body.topic && req.body.problemDescription;
  
  // For video solutions, include image info in the message
  let messageContent = req.body.problemDescription || req.body.additionalInfo || 'No additional notes';
  if (isVideoSolution && req.files && req.files.length > 0) {
    const imageInfo = `\n\nImages attached: ${req.files.length} image(s) - ${req.files.map(file => file.originalname).join(', ')}`;
    messageContent += imageInfo;
  }
  
  return {
    isVideoSolution,
    requestType: isVideoSolution ? 'Video Solution Request' : 'Tutor Request',
    templateParams: {
      requester_name: req.body.requesterName || req.body.studentName || 'Student',
      student_name: req.body.studentName || req.body.requesterName || 'Student',
      email: req.body.email,
      phone: req.body.phoneNum || 'Not provided',
      grade: req.body.grade || 'Not specified',
      subject: req.body.subject || 'Not specified',
      message: messageContent,
      request_id: req.body.requestId || '',
      request_date: new Date().toLocaleString(),
      company_name: 'STEM Intelligence',
      admin_email: 'stemintelligencetutors@gmail.com'
    }
  };
};

router.post("/create", upload.array('images', 5), async (req, res) => {
  try {
    // Validate required fields based on request type
    const isVideoSolution = req.body.topic && req.body.problemDescription;
    
    if (isVideoSolution) {
      // Video solution validation
      if (!req.body.studentName || !req.body.email || !req.body.subject || !req.body.topic || !req.body.problemDescription) {
        return res.status(400).json({ message: "Student name, email, subject, topic, and problem description are required for video solutions" });
      }
    } else {
      // Regular tutor request validation
      if (!req.body.requesterName || !req.body.email) {
        return res.status(400).json({ message: "Name and email are required" });
      }
    }

    const db = await connecToDatabase();
    const { templateParams } = mapRequestData(req);
    
    // Insert into database
    const collectionName = isVideoSolution ? "videoSolutionRequests" : "tutorRequests";
    const dbData = isVideoSolution ? {
      studentName: req.body.studentName,
      email: req.body.email,
      subject: req.body.subject,
      topic: req.body.topic,
      problemDescription: req.body.problemDescription,
      imageCount: req.files ? req.files.length : 0,
      imageNames: req.files ? req.files.map(file => file.originalname) : [],
      createdAt: new Date(),
      status: 'pending'
    } : {
      requesterName: req.body.requesterName,
      email: req.body.email,
      phoneNum: req.body.phoneNum || '',
      grade: req.body.grade || '',
      studentName: req.body.studentName || '',
      subject: req.body.subject || '',
      additionalInfo: req.body.additionalInfo || '',
      createdAt: new Date(),
      status: 'pending'
    };

    const result = await db.collection(collectionName).insertOne(dbData);
    const requestId = result.insertedId.toString();
    
    // Update template params with request ID
    templateParams.request_id = requestId;

    const emailEndpoint = 'https://api.emailjs.com/api/v1.0/email/send';
    const commonBody = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,
      accessToken: process.env.EMAILJS_PRIVATE_KEY,
      template_params: templateParams
    };

    // Send client email
    await axios.post(emailEndpoint, {
      ...commonBody,
      template_id: process.env.EMAILJS_CLIENT_TEMPLATE_ID
    }, { headers: { 'Content-Type': 'application/json' } });

    // Send tutor email
    await axios.post(emailEndpoint, {
      ...commonBody,
      template_id: process.env.EMAILJS_TUTOR_TEMPLATE_ID
    }, { headers: { 'Content-Type': 'application/json' } });

    console.log(`✅ ${isVideoSolution ? 'Video solution' : 'Tutor'} request emails sent successfully`);
    res.status(201).json({ 
      success: true, 
      message: isVideoSolution ? "Video solution request created" : "Tutor request created", 
      requestId,
      requestType: isVideoSolution ? 'video_solution' : 'tutor_request'
    });

  } catch (error) {
    console.error('❌ EmailJS API error:', error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Internal error", error: error.message });
  }
});

// New route specifically for video solutions (optional - you can use the same route above)
router.post("/video-solution/create", upload.array('images', 5), async (req, res) => {
  // This route will automatically redirect to the main create route
  // but you can add video-specific logic here if needed
  req.body.topic = req.body.topic || 'Video Solution';
  req.body.problemDescription = req.body.problemDescription || req.body.message;
  
  // Call the main create route
  return router.handle(req, res);
});

module.exports = router;
