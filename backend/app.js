const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is working!" });
});


const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});

module.exports = app;
