const router = require("express").Router();
const {
  addNew,
  getAll,
  deleteUserById,
  paritialUpdate,
  getUserById,
} = require("../controllers/users.controller");

router.post("/new", addNew);
router.delete("/:_id", deleteUserById);
router.patch("/:_id", paritialUpdate);

router.get("/", getAll);
router.get("/:_id", getUserById);
module.exports = router;
