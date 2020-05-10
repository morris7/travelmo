import axios, { AxiosInstance } from 'axios';

const postFields = '_fields=content,acf,title,yoast_head';
const postsFields = '_fields=title,acf,excerpt,slug,yoast_head';
const homepageFields = 'slug=homepage&_fields=content,yoast_head';
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
      const response = await this.http.get(`/posts?${postsFields}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  public async getHomePage() {
    try {
      const response = await this.http.get(`/pages?${homepageFields}`);;
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  public async getPost(slug) {
    try {
      const response = await this.http.get(`/posts?slug=${slug}&${postFields}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

const HttpInstance = new Http();

export default HttpInstance;