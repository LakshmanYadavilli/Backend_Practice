const currencies = require("../currencies.json");
const { paramsError } = require("../validators/currencies.validators");

class Currencies {
  getCurrencies = (req, res) => {
    res.json(currencies);
  };
  getCurrencyById = (req, res) => {
    const filterData = currencies.data.filter(
      (item) => item.id === req.params.id.toUpperCase()
    );
    if (filterData.length) res.json({ data: filterData });
    else res.sendStatus(404);
  };
}

module.exports = Currencies;
