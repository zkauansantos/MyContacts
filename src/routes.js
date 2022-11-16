const { Router } = require("express");
const ContactControler = require("./app/controllers/ContactController");
const CategoryControler = require("./app/controllers/CategoryController");


const router = Router();

router.get("/contacts", ContactControler.index);
router.get("/contacts/:id", ContactControler.show);
router.delete("/contacts/:id", ContactControler.delete);
router.post("/contacts", ContactControler.store);
router.put("/contacts/:id", ContactControler.update);

router.get("/categories", CategoryControler.index);
router.get("/categories/:id", CategoryControler.show);
router.post("/categories", CategoryControler.store);
router.put("/categories/:id", CategoryControler.update);
router.delete("/categories/:id", CategoryControler.delete);

module.exports = router;
