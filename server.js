const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// TEMPORARY place to store your Google Drive file links
let files = [
  {
    name: "Example File",
    url: "https://drive.google.com/your-file-link"
  }
];

// GET: return list of files
app.get("/files", (req, res) => {
  res.json(files);
});

// POST: add a new file link
app.post("/files", (req, res) => {
  const { name, url } = req.body;
  if (!name || !url) {
    return res.status(400).json({ error: "Name and URL are required." });
  }
  files.push({ name, url });
  res.json({ message: "File added successfully" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
