import Book from "../models/Book.js";
import Hotel from "../models/Hotel.js";
import fileService from "./fileService.js";

class BookService {
  async create(book) {
    const result = await Book.create(book);
    return result;
  }

  async getAll() {
    const result = await Book.find();
    return result;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const result = await Book.findById(id);
    return result;
  }

  async delete(id) {
    console.log(id);
    if (!id) {
      throw new Error("не указан ID");
    }
    const deletedBook = await Book.findByIdAndDelete(id);
    return deletedBook;
  }
}

export default new BookService();
