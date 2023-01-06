import axios, { AxiosRequestConfig } from "axios";

class Request {
  token: string;
  handleError(e: any, showErr = true) {
    // console.log(e);
  }
  post(url: string, params: any) {
    return new Promise<{ data: any }>((resolve, reject) => {
      let data = params;
      const config: any = {};
      axios
        .post(`${url}`, data, config)
        .then((response) => {
          resolve(response?.data);
        })
        .catch((e) => {
          this.handleError(e);
          reject(e);
        });
    });
  }

  get(url: string) {
    return new Promise<{ data: any }>((resolve, reject) => {
      const config: any = {};

      axios
        .get(`${url}`, config)
        .then((response) => {
          resolve(response?.data);
        })
        .catch((e) => {
          this.handleError(e);
          reject(e);
        });
    });
  }

  delete(url: string) {
    return new Promise<{ data: any }>((resolve, reject) => {
      const config: any = {};
      axios
        .delete(`${url}`, config)
        .then((response) => {
          resolve(response?.data);
        })
        .catch((e) => {
          this.handleError(e);
          reject(e);
        });
    });
  }
}

export default new Request();
