// create web server
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");
const { Op } = require("sequelize");

// create comment
router.post("/:postId", async (req, res) => {
  try {
    const comment = await Comment.create({
      content: req.body.content,
      postId: req.params.postId,
      userId: req.body.userId
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get all comments by post id
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { postId: req.params.postId },
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ]
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get all comments by user id
router.get("/user/:userId", async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { userId: req.params.userId },
      include: [
        {
          model: Post,
          attributes: ["title"]
        }
      ]
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update comment
router.patch("/:commentId", async (req, res) => {
  try {
    const comment = await Comment.update(
      {
        content: req.body.content
      },
      { where: { id: req.params.commentId } }
    );
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete comment
router.delete("/:commentId", async (req, res) => {
    try {
        const comment = await Comment.destroy({
        where: { id: req.params.commentId }
        });
        res.status(200).json(comment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

