module.exports = (app) => {
  const article = require("../controllers/article.controller.js");

  let router = require("express").Router();

  router.get("/", article.findAll);
  router.get("/published", article.findAllPublished);
  router.post("/", article.create);
  router.get("/:id", article.findOne);
  router.put("/:id", article.update);
  router.delete("/:id", article.delete);


  app.use('/api/article', router);
};