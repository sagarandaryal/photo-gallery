import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
    requred: true,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
});

export default mongoose.model("Image", imageSchema);
