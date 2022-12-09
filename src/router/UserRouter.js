import Router from "express";
import UserController from "../controller/UserController.js";

const userRouter = new Router();

userRouter.get("/all", UserController.getAll);
userRouter.get("/one/:id", UserController.getOne);

userRouter.put("/update/:id", UserController.update);
userRouter.delete("/delete/:id", UserController.delete);

export default userRouter;
