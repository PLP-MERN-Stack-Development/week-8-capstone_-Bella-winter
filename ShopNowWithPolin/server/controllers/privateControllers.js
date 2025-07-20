const getDashboard = (req, res) => {
  res.json({
    message: "Welcome to My dashboard",
    user: req.user,
  });
};

module.exports = {
  getDashboard,
};
