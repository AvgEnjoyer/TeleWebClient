// /*
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { UserProfileComponent } from './user-profile.component';
// import { AuthService } from "../../services/api-response/api-response.service";
// import { of } from 'rxjs';
//
// describe('UserProfileComponent', () => {
//   let fixture: ComponentFixture<UserProfileComponent>;
//   let mockAccountService: jasmine.SpyObj<AuthService>;
//   let component: UserProfileComponent;
//
//   beforeEach(async () => {
//     // Create a mock AuthService with the required methods
//     mockAccountService = jasmine.createSpyObj('AccountService', ['loginUser', 'isAuthorized']);
//
//     // Provide a mock implementation for the isAuthorized method
//     mockAccountService.isAuthorized.and.returnValue(of(false)); // Set initial value
//
//     // Configure the mock loginUser method to return an Observable
//     mockAccountService.loginUser.and.returnValue(of({ success: true }));
//
//     await TestBed.configureTestingModule({
//       declarations: [UserProfileComponent],
//       providers: [
//         { provide: AuthService, useValue: mockAccountService }
//       ],
//       imports: [FormsModule]
//     }).compileComponents();
//   });
//
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(UserProfileComponent);
//     component = fixture.componentInstance;
//
//     fixture.detectChanges();
//   });
//
//   it('should handle successful login', () => {
//
//
//     // Set the desired credentials
//     component.credentials = { UserNameOrEmail: 'johndoe', Password: 'johndoe' };
//
//     // Call the login method
//     component.login();
//
//     // Expect that the loginUser method was called with the correct credentials
//     expect(mockAccountService.loginUser).toHaveBeenCalledWith(component.credentials);
//
//     // Expect that the isAuthorized flag is set to true after the login method completes
//     expect(component.isAuthorized).toBe(true);
//   });
//
//
//   // Write more test cases as needed
//
// });
// */
