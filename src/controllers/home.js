exports.get = (req, res, next) => {
  const { home } = req.params;
  console.log(req.params);
  return home.js;
};
