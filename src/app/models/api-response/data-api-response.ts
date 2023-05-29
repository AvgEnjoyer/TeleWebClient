import {ApiResponse} from "./api-response.interface";
export interface DataApiResponse<T> extends ApiResponse {
  data: T;
}
