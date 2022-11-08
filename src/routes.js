const { Router } = require("express");

const ContactControler = require("./app/controllers/ContactController");

const router = Router();

router.get("/contacts", ContactControler.index);

module.exports = router;
