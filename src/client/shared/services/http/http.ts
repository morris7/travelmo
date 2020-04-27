import axios, { AxiosInstance } from 'axios';

class Http {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://wp.travelmo.co/wp-json/wp/v2',
      timeout: 1000
    });
  }

  async getPosts() {
    try {
      const response = await this.http.get('/posts');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
}