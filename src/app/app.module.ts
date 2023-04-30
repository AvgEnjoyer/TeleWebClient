import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { ChannelComponent } from './channel/channel.component';

@NgModule({
  declarations: [
    AppComponent,
    // LandingPageComponent,
    routingComponents,
    ToolbarComponent,
    FeedComponent,
    PostComponent,
    ChannelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
