import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelFeedComponent } from './channel-feed.component';

describe('ChannelFeedComponent', () => {
  let component: ChannelFeedComponent;
  let fixture: ComponentFixture<ChannelFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChannelFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
