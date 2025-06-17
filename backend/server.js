const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const tutorRequests = require("./routes/tutorRequest");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/tutor-requests", tutorRequests);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});