const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;  // Use Render's port or default to 3000

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});