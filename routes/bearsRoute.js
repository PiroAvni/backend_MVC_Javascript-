const express = require("express");
const router = express.Router();

const bearsController = require("../controllers/bearsController");

 router.get("/", bearsController.index);
 router.get("/:id", bearsController.show);
 router.post("/", bearsController.create);
 router.delete('/:id', bearsController.destroy);

// router.route("/").get(bearsController.index);

// router.route("/").post(bearsController.create);

// router.route("/:id").get(bearsController.show);

// router.route("/:id").delete(bearsController.destroy);

module.exports = router;
