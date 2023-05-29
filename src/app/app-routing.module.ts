import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {ChannelComponent} from "./components/channel/channel.component";
import {ChannelFeedComponent} from "./components/channel-feed/channel-feed.component";
import {FeedComponent} from "./components/feed/feed.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {EmailConfirmationHandlerComponent} from "./components/email-confirmation-handler/email-confirmation-handler.component";

const routes: Routes = [
  { path: '', component: FeedComponent },
  { path: 'c/:channelId', component: ChannelFeedComponent },
  { path: 'profile/confirmEmail', component: EmailConfirmationHandlerComponent },
  { path: 'profile/forgotPassword', component: EmailConfirmationHandlerComponent },
  { path: 'profile/resetPassword', component: EmailConfirmationHandlerComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '**', component: LandingPageComponent }
];


const routingComponents = [
  LandingPageComponent,
  ChannelComponent,
  ChannelFeedComponent,
  UserProfileComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routingComponents };
