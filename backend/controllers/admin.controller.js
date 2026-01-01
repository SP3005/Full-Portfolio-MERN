const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin || !(await admin.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    token: generateToken(admin._id),
    email: admin.email
  });
  const LoginLog = require("../models/LoginLog");

// after login attempt
await LoginLog.create({
  email,
  ip: req.ip,
  success: !!admin
});
};
