import axios, { AxiosInstance } from 'axios';

class Http {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://wp.travelmo.co/wp-json/wp/v2', //get this from env!
      timeout: 1000
    });
  }

  public async getPosts() {
    try {
      const response = await this.http.get('/posts');
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

const HttpInstance = new Http();

export default HttpInstance;