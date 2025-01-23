import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static pages
app.use(express.static(path.join(__dirname, "../public")));

// API Endpoints
app.get("/launch", (req, res) => {
    res.send("Launch URL: App connected successfully!");
});

app.get("/disconnect", (req, res) => {
    res.send("Disconnect URL: App disconnected successfully!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
