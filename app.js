const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: 'uploads/'});


const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    // Respond with the uploaded file information
    res.json(req.file);
});

app.listen(8000, () => {
console.log(`server is started and 
  listening at port: ${PORT}`);
});