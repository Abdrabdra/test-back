import HotelService from "../service/HotelService.js";

class HotelController {
  async create(req, res) {
    try {
      const hotel = await HotelService.create(req.body, req.files.picture);
      res.json(hotel);
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const hotels = await HotelService.getAll();
      return res.json(hotels);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const hotel = await HotelService.getOne(req.params.id);
      return res.json(hotel);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedHotel = await HotelService.update(req.body);
      return res.json(updatedHotel);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  
  async delete(req, res) {
    try {
      const hotel = await HotelService.delete(req.params.id);
      return res.json(hotel);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new HotelController();
