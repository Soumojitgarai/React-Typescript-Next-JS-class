//JWT (Json Web Tokens)

const jwt = require('jsonwebtoken');

// Secret key for signing the token
const secretKey = 'your-very-secure-secret-key';

// Function to create a JWT
function createToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Function to verify a JWT
function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log('Token is valid:', decoded);
    } catch (err) {
        console.error('Token is invalid:', err.message);
    }
}

// Example usage
const payload = { username: 'exampleUser', role: 'admin' };
const token = createToken(payload);
console.log('Generated Token:', token);

// Verify the token
verifyToken(token);
