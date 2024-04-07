const express = require("express");
const Post = require("../src/models/Posts");
const app = express();

const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

app.get("/list_posts", async (req, res) => {
  try {
    const listPost = await Post.find();
    res.send({ listPost });
  } catch (error) {
    res.status(400).send("Erro ao listar os posts", error);
  }
});

app.post("/create_post", async (req, res) => {
  try {
    const { user, title, content } = req.body;
    const post = await Post.create({ user, title, content });
    res.status(200).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/show_post/:post_id", async (req, res) => {
  try {
    const postId = req.params.post_id;
    const showPost = await Post.findById(postId);
    Post.delete;
    res.status(200).send(showPost);
  } catch (error) {
    res.status(400).send("Erro ao mostrar o seu post", error);
  }
});

app.patch("/update_post/:post_id", async (req, res) => {
  try {
    const postId = req.params.post_id;
    const { title, content } = req.body;

    /* para que seja atualizado os novos posts, deve-se passar o new: true
    conforme abaixo*/
    const updatePostId = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );

    res.send(updatePostId);
  } catch (error) {
    res.status(400).send("Erro ao atualizar o seu post", error);
  }
});

app.delete("/delete_post/:post_id", async (req, res) => {
  try {
    const postId = req.params.post_id;
    const deletePost = await Post.findByIdAndDelete(postId);
    res.status(200).send({ msg: "deletado com sucesso" }, deletePost);
  } catch (error) {
    res.status(400).send({ msg: "Erro ao deletar o seu post", error });
  }
});

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));
