import {Component, Input} from '@angular/core';
import {GetChannelDTO, UpdateChannelDTO} from "../../models/channel/channel.interface";
import {Post} from "../../models/post/post.interface";
import {UserService} from "../../services/user/user.service";
import {AuthService} from "../../services/auth/auth.service";
import {ChannelService} from "../../services/channel/channel.service";

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent {

  isDropdownOpen = false;

  isCreatePressed: boolean = false;

  subscriptions: GetChannelDTO[] = [];

  createChannelDTO: UpdateChannelDTO = { name: '', description: '' };

  isAuthorized: boolean=false;
  constructor(private userService:UserService,
              private authService:AuthService,
              private channelService: ChannelService) { }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleCreate(){
    this.isCreatePressed = !this.isCreatePressed;
    console.log(1);
  }


  ngOnInit(): void {
    this.isAuthorized= this.authService.isLoggedIn();
    this.userService.getUserSubscriptions().subscribe(
      response=>{
        this.subscriptions = response.data;
      });
  }

  createChannel() {
    this.channelService.createChannel(this.createChannelDTO).subscribe(
      response=>{
        this.subscriptions.push(response.data);
      }
    );
    this.isCreatePressed = false;
  }


}
