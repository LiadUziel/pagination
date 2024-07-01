import mongoose from "mongoose";

export interface Post {
  title: string;
  content: string;
}

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
