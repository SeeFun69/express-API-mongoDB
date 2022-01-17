module.exports = (app) => {
    const comment = require("../controllers/comment.controller.js");
  
    let router = require("express").Router();
  
    router.get("/", comment.findAll);
    router.post("/", comment.create);
    router.put("/:id", comment.update);
    router.delete("/:id", comment.delete);
  
  
    app.use('/api/comment', router);
  };