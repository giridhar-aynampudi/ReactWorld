const express = require("express");

const router = express.Router();

const BlogPost = require("../models/blogPosts");
router.get("/name", (req, res) => {
  //   const data = {
  //     username: "giridhar",
  //     age: 23,
  //   };
  //   res.json(data);

  //   const newBlogPost = new BlogPost(date);

  BlogPost.find({})
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((e) => console.log("error:", e));
});

router.post("/save", (req, res) => {
  console.log("Data body:", req.body);
  const data = req.body;

  const newBlogPost = new BlogPost(data);
  newBlogPost.save((e) => {
    if (e) {
      res.send(500).json({ msg: "Internal server error" });
      return;
    }
    return res.json({
      msg: "Data received by server",
    });
  });
});

module.exports = router;
