const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const Comment = require("../models/Comment");
//@route   GET api/comment
//@desc   Get all user comments
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const comments = await Comment.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route   Post api/contacts
//@desc  Add new Contact
// @access  Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newComment = new Comment({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const comment = await newComment.save();

      res.json(comment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("server error");
    }
  }
);

//@route   PUT api/contacts
//@desc  Update Contact
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  //Build Contact object
  const commentFields = {};

  if (name) commentFields.name = name;
  if (email) commentFields.name = email;
  if (phone) commentFields.name = phone;
  if (type) commentFields.name = type;

  try {
    let comment = await comment.findById(req.params.id);

    if ( comment) return res.status(404).json({ msg:  "comment not found" });

    //Make Sure user ons  comment
    if  (comment.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

   comment = await comment.findByIdAndUpdate(
      req.params.id,
      { $set: commentFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

//@route   DELETE api/contacts
//@desc  DELETE Contact
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let contact = await comment.findById(req.params.id);

    if (!comment) return res.status(404).json({ msg: "comment not found" });

    //Make Sure user ons  comment
    if (comment.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not Authorized" });
    }

    await comment.findByIdAndRemove(req.params.id);

    res.json({ msg: "comment removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
