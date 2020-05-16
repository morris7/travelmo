import axios, { AxiosInstance } from 'axios';

const postFields = '_fields=content,acf,title,yoast_head';
const postsFields = '_fields=title,acf,excerpt,slug,yoast_head';
const homepageFields = 'slug=homepage&_fields=content,yoast_head';

const currencyApiKey = 'e2fc30757b3856688e5f';

class Http {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: 'https://wp.travelmo.co/wp-json/wp/v2', //get this from env!
      timeout: 5000
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

  public async getCurrency(convertFrom: string, convertTo: string) {
    const currencies = `${convertFrom}_${convertTo},USD_${convertTo}`;
    try {
      const response = await this.http.get(`https://free.currconv.com/api/v7/convert?q=${currencies}&compact=ultra&apiKey=${currencyApiKey}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

const HttpInstance = new Http();

export default HttpInstance;