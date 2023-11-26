const password = process.env.password;
const verifyAuth = (req, res, next) => {
  //   console.log({ params: req.params });
  if (req.headers && req.headers.authorization === password) {
    return next();
  }
  return res.sendStatus(403);
};

module.exports = { verifyAuth };
