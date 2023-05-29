export interface AccountRegisterDTO {
  Name: string;
  UserName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
  DateOfBirth?: Date;
}
