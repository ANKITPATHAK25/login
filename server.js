// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulated database for demonstration
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Login route
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        return res.status(200).json({ message: 'Login successful!' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
