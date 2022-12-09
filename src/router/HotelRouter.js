import Router from "express";
import HotelController from "../controller/HotelController.js";

const hotelRouter = new Router();

hotelRouter.post("/create-hotel", HotelController.create);
hotelRouter.get("/get-hotels", HotelController.getAll);
hotelRouter.get("/:id", HotelController.getOne);
hotelRouter.put("/update-hotel", HotelController.update);
hotelRouter.delete("/:id", HotelController.delete);

export default hotelRouter;
