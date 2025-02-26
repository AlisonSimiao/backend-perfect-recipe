import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios';
import type { IErrorResponse } from '../types/apiServicesType';




class apiServices {
  private api: AxiosInstance;
  static instance: apiServices;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://192.168.100.73:3000',
    })
    console.log('apiServices constructor')
  }

  async login<T>(email: string, password: string): Promise<T | IErrorResponse> {
   
      const response = await this.api.post('/auth/login', { email, password })
      .then(this.getResponse)
      .catch(this.getError);

      return response.data;
   
  }

  async SignUp<T>(email: string, password: string): Promise<T | IErrorResponse> {
    
     return this.api.post('/auth/signup', { email, password })
      .then(this.getResponse<T>)
      .catch(this.getError);
  }


  private async getResponse<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  private async getError(error: AxiosError<any>): Promise<IErrorResponse> {
    console.log(error)
    if (error.status === 422) {

      return {
        message: error.response?.data,
        status: error.status,
      };

    }
    if ([404, 409, 401].includes(error.status)) {
      
      return {
        message: error.response?.data?.message,
        status: error.status,
      };
    }
    return {
      message: 'Error interno do servidor',
      status: error.status || 500,
    };
  }
  static getInstance() {
    if (!apiServices.instance) {
      apiServices.instance = new apiServices();
    }
    return apiServices.instance;
  }

  

}

export default apiServices.getInstance();
