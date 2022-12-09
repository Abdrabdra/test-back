import Router from "express";
import BookController from "../controller/BookController.js";

const bookRouter = new Router();

bookRouter.get("/all", BookController.getAll);
bookRouter.get("/one/:id", BookController.getOne);

bookRouter.post("/create", BookController.create);

bookRouter.delete("/delete/:id", BookController.delete);

export default bookRouter;
