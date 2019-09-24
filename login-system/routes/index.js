const express = require("express");
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const { ensureAuthenticated } = require("../config/auth");

// Welcome Page
router.get("/", (req, res) => res.render("Welcome"));

// Dashborad
router.get("/dashboard", ensureAuthenticated, (req, res) =>
  res.render("dashboard", {
    name: req.user.name
  })
);

module.exports = router;
