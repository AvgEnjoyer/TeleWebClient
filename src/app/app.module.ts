import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FeedComponent } from './components/feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { ChannelComponent } from './components/channel/channel.component';
import { ChannelFeedComponent } from './components/channel-feed/channel-feed.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth/auth.service";
import { EmailConfirmationHandlerComponent } from './components/email-confirmation-handler/email-confirmation-handler.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import { SubListComponent } from './components/sub-list/sub-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ToolbarComponent,
    FeedComponent,
    PostComponent,
    ChannelComponent,
    ChannelFeedComponent,
    UserProfileComponent,
    EmailConfirmationHandlerComponent,
    SubListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
