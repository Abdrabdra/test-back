import mongoose from "mongoose";

const Book = new mongoose.Schema({
  userid: { type: "ObjectId", ref: "User" },
  productsId: [{ type: "ObjectId", ref: "Hotel" }],
});

export default mongoose.model("Book", Book);
