import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerDocument from "./swagger.json" assert { type: "json" };

import authRouter from "./src/router/AuthRouter.js";
import hotelRouter from "./src/router/HotelRouter.js";
import userRouter from "./src/router/UserRouter.js";
import bookRouter from "./src/router/BookRouter.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/hotel", hotelRouter);
app.use("/book", bookRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://user:user@cluster0.naml4bb.mongodb.net/crudapp?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
