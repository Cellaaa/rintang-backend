// tokenUtils.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (userData) => {
  const payload = {
    id: userData.id,
    email: userData.email,
    // You can include other relevant data here if needed
  };

  const token = jwt.sign(payload, process.env.SECRETKEY);
  return token;
};

export { generateToken };
