import mongoose from "mongoose";

const Hotel = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String },
});

export default mongoose.model("Hotel", Hotel);
