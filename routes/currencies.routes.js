const router = require("express").Router();
const {
  validateCurrencyParams,
} = require("../middlewares/validateCurrencyParams");
const Currencies = require("../controllers/currencies.controller");
const CurrenciesInstance = new Currencies();

router.get("/", CurrenciesInstance.getCurrencies);
router.get("/:id", validateCurrencyParams, CurrenciesInstance.getCurrencyById);

module.exports = router;
