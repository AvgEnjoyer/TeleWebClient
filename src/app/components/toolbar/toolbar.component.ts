import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { GetChannelDTO } from "../../models/channel/channel.interface";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private router: Router, private userService: UserService) {}
  goToChannel(value: string) {
    if (value) {
      this.router.navigate(['/c', value]).then(() => {
        console.log("Navigation succeeded");
      }).catch((error) => {
        console.error("Navigation failed:", error);
      });
    }
  }

}
