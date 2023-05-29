import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiResponse } from "../../models/api-response/api-response.interface";
import {GetChannelDTO} from "../../models/channel/channel.interface";
import {DataApiResponse} from "../../models/api-response/data-api-response";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private baseUrl = '/api/user';
  constructor(private http: HttpClient) {
  }
  getUserSubscriptions(): Observable<DataApiResponse<GetChannelDTO[]>> {
    return this.http.get<DataApiResponse<GetChannelDTO[]>>(`${this.baseUrl}/subscriptions`);
  }
}


