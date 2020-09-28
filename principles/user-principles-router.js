const router = require("express").Router();

const userPrinciples = require("./user-principles-model");
const authenticate = require('../users/authenticate-middleware');


router.get("/:id", authenticate, (req, res) => {
    userPrinciples.find(req.params.id)
      .then((principles) => {
        res.status(200).json(principles);
      })
      .catch((err) => {
          console.log(err)
          res.status(400).json({message: err})
      });
});


router.post("/", authenticate, (req, res) => {
    Principles.add(req.body)
        .then(principles => {
            res.status(201).json(principles);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});


router.delete("/:id", authenticate, (req, res) => {
    const { id } = req.params;
    Principles.remove(id)
    .then((principles) => {
        if (!principles) {
          res.status(404).json({
            message: "The principle with the specified ID does not exist.",
          });
        } else {
          res.status(200).json(principles);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        res.status(500).json({ errorMessage: "The principle could not be removed" });
      });
  });

  router.put("/:id", authenticate, (req, res) => {
    Principles.update(req.params.id, req.body)
      .then(principles => {
        if (principles) {
          res.status(200).json(principles);
        } else {
          res.status(404).json({ message: "There was an issue completing this request" });
        }
      })
      .catch(error => {
        console.log("Error:", error);
        res.status(500).json({
          message: "Error updating the principle",
        });
      });
  });

module.exports = router;