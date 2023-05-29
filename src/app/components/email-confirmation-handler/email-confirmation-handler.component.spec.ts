import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirmationHandlerComponent } from './email-confirmation-handler.component';

describe('EmailConfirmationHandlerComponent', () => {
  let component: EmailConfirmationHandlerComponent;
  let fixture: ComponentFixture<EmailConfirmationHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailConfirmationHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailConfirmationHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
