const encrypt = require('./script');
const secret = 'mySuperSecretKey'; // Keep this safe and hidden in real apps

const payload = {
  id: 'user123',
  email: 'user@example.com',
};

const token = encrypt(payload, secret);
console.log('Generated JWT:', token);
