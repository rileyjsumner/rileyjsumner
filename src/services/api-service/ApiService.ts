import axios, { AxiosInstance } from "axios";

export class ApiService {
  public baseUrl: string;

  private axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;

    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
    });
  }
  public async callApi<T>(
    method: "GET" | "POST" | "PATCH" | "DELETE",
    path: string,
    body?: any
  ): Promise<T> {
    switch (method) {
      case "GET":
        return (await this.axiosInstance.get<T>(path)).data;
      case "POST":
        return (await this.axiosInstance.post<T>(path, { body })).data;
      case "PATCH":
        return (await this.axiosInstance.patch<T>(path, { body })).data;
      case "DELETE":
        return (await this.axiosInstance.delete<T>(path)).data;
    }
  }
}
