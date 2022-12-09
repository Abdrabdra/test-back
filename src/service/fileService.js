import * as uuid from "uuid";
import * as path from "path";
import * as fs from "fs";

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("static", fileName);
      fs.writeFileSync(filePath, `${file.data}`);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();
