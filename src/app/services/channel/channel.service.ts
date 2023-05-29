import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {GetChannelDTO, UpdateChannelDTO} from '../../models/channel/channel.interface'
import {ApiResponse} from "../../models/api-response/api-response.interface";
import {DataApiResponse} from "../../models/api-response/data-api-response";
import {GetPostDTO, UpdatePostDTO} from "../../models/post/post.interface";
@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private baseUrl = '/api'


  constructor(private http: HttpClient) { }
  getChannel(id:string): Observable<DataApiResponse<GetChannelDTO>>{
    return this.http.get<DataApiResponse<GetChannelDTO>>(`${this.baseUrl}/channel/${id}`);
  }
  isAdmin(id:string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/channel/${id}/isAdmin`);
  }

  createChannel(createChannelDTO: UpdateChannelDTO) : Observable<DataApiResponse<GetChannelDTO>>
  {
    return this.http.post<DataApiResponse<GetChannelDTO>>(`${this.baseUrl}/channel`, createChannelDTO);
  }

  addPost(activeChannelId: string, post: UpdatePostDTO): Observable<DataApiResponse<GetPostDTO>> {
    return this.http.post<DataApiResponse<GetPostDTO>>(`${this.baseUrl}/channel/${activeChannelId}/post`, post);
  }
  getPosts(activeChannelId: string): Observable<DataApiResponse<GetPostDTO[]>> {
    return this.http.get<DataApiResponse<GetPostDTO[]>>(`${this.baseUrl}/channel/${activeChannelId}/post`);
  }
}

