
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/log-message", (req, res) => {
  const { firstName, lastName, email, phone, company, inquiryType, message } =
    req.body;
  const timestamp = new Date().toISOString();
  const log = `
--- New Form Submission ---
Timestamp: ${timestamp}
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone}
Company: ${company}
Inquiry Type: ${inquiryType}
Message: ${message}
---------------------------
`;

  fs.appendFile(path.join(__dirname, "..", "log.txt"), log, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
      res.status(500).send("Error writing to log file");
    } else {
      res.status(200).send("Message logged successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
