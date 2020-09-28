const router = require("express").Router();

const Principles = require("./principles-model");
const authenticate = require('../users/authenticate-middleware');
const authenticateAdmin = require("../users/authenticate-admin-middleware")


router.get("/", authenticate, (req, res) => {
    Principles.find()
      .then((principles) => {
        res.status(200).json(principles);
      })
      .catch((err) => {
          res.status(400).json({message: err})
      });
});

router.get("/:id", authenticate, (req, res) => {
  Principles.findById(req.params.id)
    .then((principles) => {
      res.status(200).json(principles);
    })
    .catch((err) => {
        res.status(400).json({message: err})
    });
});


router.post("/", authenticate, (req, res) => {
  console.log(req.body)
    Principles.add(req.body)
        .then(principles => {
            res.status(201).json(principles);
        })
        .catch(error => {
            res.status(500).json({error: error.message});
        });
});


router.delete("/:id", authenticateAdmin, (req, res) => {
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

  router.put("/:id", authenticateAdmin, (req, res) => {
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