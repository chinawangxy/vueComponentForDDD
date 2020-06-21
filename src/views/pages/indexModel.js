import { HTTP } from "@/utils/http";

export default class IndexModel extends HTTP {
  getFirstData() {
    return new Promise((resolve, reject) => {
      this.ajaxGet("./First", true, {
        success(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        }
      });
    });
  }
  getSecondData() {
    return new Promise((resolve, reject) => {
      this.ajaxGet("./Second", true, {
        success(data) {
          resolve(data);
        },
        error(err) {
          reject(err);
        }
      });
    });
  }
}
