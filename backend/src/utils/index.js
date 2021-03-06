function hasRole(ROLES) {
  return (req, res, next) => {
    if (ROLES.indexOf(req.user.role) > -1) {
      next();
      return;
    }
    res.status(403).json({ message: "Permission denied." });
  };
}

module.exports = {
  hasRole,
};
