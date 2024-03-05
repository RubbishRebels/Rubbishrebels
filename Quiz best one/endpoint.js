const express = require('express');
const app = express();
const port = 3000;

// Define a simple endpoint
app.get('/api/get-data', (req, res) => {
    const filename = 'data.json';
    const fs = require('fs');

    // Check if the file exists
    if (fs.existsSync(filename)) {
        // If it exists, read the content
        const fileContent = fs.readFileSync(filename, 'utf-8');
        existingData = JSON.parse(fileContent);
    }

    res.json(existingData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});