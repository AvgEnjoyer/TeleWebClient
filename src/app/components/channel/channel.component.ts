import {Component, Input, OnInit} from '@angular/core';
import { GetChannelDTO } from '../../models/channel/channel.interface'
import { ChannelService } from '../../services/channel/channel.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements  OnInit{
  @Input() activeChannelId: string = 'id not found';
  @Input() activeChannel: GetChannelDTO= {id: '', name:'notfound',description:'notfound', subscribers:0 };
  @Input() isAdmin:boolean=false;

  constructor(private _channelService: ChannelService, private _route: ActivatedRoute) {
  }
  ngOnInit(): void {
  }


}

