const db = require("../models");
const Comment = db.comment;


exports.findAll = (req, res) => {

  
    Comment.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving comment."
        });
      });
  };
  
exports.create = (req, res) => {
  if (!req.body.description) {
    res.status(400).send({ message: "Comment can not be empty!" });
    return;
  }

  const comment = new Comment({
    description: req.body.description,
  });

  comment
    .save(comment)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment."
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Comment.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Comment with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Comment with id=" + id });
      });
  };
  
exports.update = (req, res) => {
  if (!req.description) {
    return res.status(400).send({
      message: "Comment to update can not be empty!"
    });
  }

  const id = req.params.id;

  Comment.findByIdAndUpdate(id, req.description, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Comment with id=${id}.`
        });
      } else res.send({ message: "Comment was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Comment with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Comment.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Comment with id=${id}. Maybe Comment was not found!`
        });
      } else {
        res.send({
          message: "Comment was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Comment with id=" + id
      });
    });
};