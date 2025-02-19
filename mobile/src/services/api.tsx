import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from 'axios';
import type { IErrorResponse } from '../types/apiServicesType';


class apiServices {
  private api: AxiosInstance;
  static instance: apiServices;

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000',
    })
    console.log('apiServices constructor')
  }

  async login(email: string, password: string) {
    try {
      const response = await this.api.post('/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private async getResponse<T>(response: AxiosResponse<T>) {
    return response.data;
  }

  private async getError(error: AxiosError<any>): Promise<IErrorResponse> {
    if (error.status === 401) {

      console.error(error.status)

      return {
        message: 'Credenciais inválidas',
        status: error.status,
      };
    }
    if (error.status === 422) {

      return {
        message: error.response?.data?.message,
        status: error.status,
      };

    }
    if (error.status === 404) {
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
