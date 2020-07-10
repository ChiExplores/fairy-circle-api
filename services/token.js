const jwt = require("jsonwebtoken");
require("dotenv").config();

const msDayOffset = 86400000;
const msHourOffset = 3600000;

const signToken = (res, user) => {
  const expiration =
    process.env.NODE_ENV === "test" ? msHourOffset : msDayOffset;
  const secret =
    process.env.NODE_ENV === "test"
      ? process.env.TEST_SECRET
      : process.env.JWT_SECRET;
  const token = jwt.sign({ user }, secret, {
    expiresIn: process.env.NODE_ENV === "test" ? "1h" : "24h",
  });
  return res.cookie("token", token, {
    expires: new Date(Date.now() + expiration),
    domain: process.env.DOMAIN,
    secure: process.env.NODE_ENV === "production" ? true : false,
    httpOnly: true,
    sameSite: "Strict",
  });
};

const verifyToken = (token) => {
  const secret =
    process.env.NODE_ENV === "test"
      ? process.env.TEST_SECRET
      : process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret, (e, decoded) => {
    if (e) return e;
    return decoded;
  });
  return decoded;
};

module.exports = { signToken, verifyToken };
