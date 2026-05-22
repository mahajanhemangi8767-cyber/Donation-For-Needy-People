const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Sample user data (In a real-world app, this would come from a database)
const users = {
    'testuser': 'password123',  // Example: username "testuser" with password "password123"
};

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');  // Serve login.html when the home route is visited
});

// Handle form submission on login
app.post('/submit-login', (req, res) => {
    const { username, password } = req.body;

    // Check if the username and password are valid
    if (users[username] && users[username] === password) {
        // Redirect to the donation page upon successful login
        res.redirect('/donate');
    } else {
        // If login fails, display an error message
        res.send('Invalid credentials. Please try again.');
    }
});

// Serve the donation page after a successful login
app.get('/donate', (req, res) => {
    res.send(`
        <h1>Welcome to the Donation Page</h1>
        <p>Thank you for logging in. Now you can make a donation!</p>
        <form action="/donate-submit" method="POST">
            <input type="number" name="amount" placeholder="Enter donation amount" required>
            <input type="submit" value="Donate">
        </form>
    `);
});

// Handle donation submission
app.post('/donate-submit', (req, res) => {
    const { amount } = req.body;
    res.send(`Thank you for your donation of $${amount}!`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
