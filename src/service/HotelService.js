import Hotel from "../models/Hotel.js";
import fileService from "./fileService.js";

class HotelService {
  async create(hotel, picture) {
    const fileName = fileService.saveFile(picture);

    const createdHotel = await Hotel.create({
      ...hotel,
      picture: fileName,
    });
    return createdHotel;
  }

  async getAll() {
    const hotels = await Hotel.find();
    return hotels;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const hotel = await Hotel.findById(id);
    return hotel;
  }

  async update(hotel) {
    if (!hotel._id) {
      throw new Error("не указан ID");
    }
    const updatedHotel = await Hotel.findByIdAndUpdate(hotel._id, hotel, {
      new: true,
    });
    return updatedHotel;
  }

  async delete(id) {
    console.log(id);
    if (!id) {
      throw new Error("не указан ID");
    }
    const hotel = await Hotel.findByIdAndDelete(id);
    return hotel;
  }
}

export default new HotelService();
