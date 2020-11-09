const PostMessage = require("../models/postMessage");

const postsController = {
  getPosts: async (req, res) => {
    try {
      const postMessages = await PostMessage.find();
      console.log(postMessages);
      res.status(200).json(postMessages);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  createPost: async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(post);

    try {
      await newPost.save();
      res.status(201).json(newPost);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
};

module.exports = postsController;
