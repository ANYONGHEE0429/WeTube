export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "YongTube";
  res.locals.routes = routes;
  next();
};
