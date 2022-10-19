import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
    //res.send('THIS WORKS!');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = await req.body;
  console.log(post);

  const newPost = new PostMessage(post);

  try {
    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    //response 409 -> conflict that the user can possibly resolve (the problem should be sent on the response body)
    res.status(409).json({ message: error.message });
  }
};
