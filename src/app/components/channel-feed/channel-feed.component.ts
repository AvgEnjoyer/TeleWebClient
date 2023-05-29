import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetChannelDTO} from "../../models/channel/channel.interface";
import {ChannelService} from "../../services/channel/channel.service";
import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-channel-feed',
  templateUrl: './channel-feed.component.html',
  styleUrls: ['./channel-feed.component.scss']
})


export class ChannelFeedComponent{
  activeChannelId: string='';

  subscribedChannels: GetChannelDTO[] = [];

  isAdmin: boolean=false;
  activeChannel :GetChannelDTO= {id: '', name:'notfound',description:'notfound', subscribers:0 };

  constructor(private route: ActivatedRoute,
              private userService:UserService,
              private authService:AuthService,
              private channelService: ChannelService){


  }

  isAuthorized: boolean=false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.activeChannelId = params['channelId'];
    });
    this.isAuthorized = this.authService.isLoggedIn();
    if(this.isAuthorized)
      this.getActiveChannelDTO(this.activeChannelId);
  }


  getActiveChannelDTO(channelId: string) {
    this.channelService.getChannel(channelId).subscribe(
      response=>{
        this.activeChannel = response.data;
      }
    );
    this.administrateChannelStatus(channelId);
  }
  administrateChannelStatus(channelId: string) {
    this.channelService.isAdmin(channelId).subscribe(
      response=>{
        this.isAdmin = response.success;
      }
    );
  }























}
