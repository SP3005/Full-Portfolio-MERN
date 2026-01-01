const Portfolio = require("../models/Portfolio");

exports.getPortfolio = async (req, res) => {
  const data = await Portfolio.findOne();
  res.json(data);
};

exports.updatePortfolio = async (req, res) => {
  const updated = await Portfolio.findOneAndUpdate({}, req.body, {
    upsert: true,
    new: true,
  });
  res.json(updated);
};
