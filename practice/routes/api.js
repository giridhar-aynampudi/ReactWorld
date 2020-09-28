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
  res.json({
    msg: "Data received by server",
  });
});

module.exports = router;
