require('dotenv').config();
const express = require("express");
const connecToDatabase = require("../db");
const router = express.Router();
const axios = require('axios');

router.post("/create", async (req, res) => {
  try {
    if (!req.body.requesterName || !req.body.email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    const db = await connecToDatabase();
    const result = await db.collection("tutorRequests")
      .insertOne({
        requesterName: req.body.requesterName,
        email: req.body.email,
        phoneNum: req.body.phoneNum || '',
        grade: req.body.grade || '',
        studentName: req.body.studentName || '',
        subject: req.body.subject || '',
        additionalInfo: req.body.additionalInfo || '',
        createdAt: new Date(),
        status: 'pending'
      });
    const requestId = result.insertedId.toString();

    const templateParams = {
      requester_name: req.body.requesterName,
      student_name: req.body.studentName || 'your student',
      email: req.body.email,
      phone: req.body.phoneNum || 'Not provided',
      grade: req.body.grade || 'Not specified',
      subject: req.body.subject || 'Not specified',
      message: req.body.additionalInfo || 'No additional notes',
      request_id: requestId,
      request_date: new Date().toLocaleString(),
      company_name: 'STEM Intelligence',
      admin_email: 'stemintelligencetutors@gmail.com'
    };

    const emailEndpoint = 'https://api.emailjs.com/api/v1.0/email/send';
    const commonBody = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      user_id: process.env.EMAILJS_PUBLIC_KEY,      // ✅ Include public key
      accessToken: process.env.EMAILJS_PRIVATE_KEY, // ✅ Include private key
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

    console.log('✅ Emails sent successfully');
    res.status(201).json({ success: true, message: "Tutor request created", requestId });

  } catch (error) {
    console.error('❌ EmailJS API error:', error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Internal error", error: error.message });
  }
});

module.exports = router;
