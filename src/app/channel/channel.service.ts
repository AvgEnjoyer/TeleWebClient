import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Channel } from './channel.interface'
@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private baseUrl = 'localhost:44343/api'
  constructor(private http: HttpClient) { }
  getChannels(): Observable<Channel[]>{
    return this.http.get<Channel[]>(`${this.baseUrl}/channel`);
  } 
}
