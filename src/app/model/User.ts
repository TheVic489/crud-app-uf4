export class User {
  full_name: any;
  username: any;
  password: any;
  role: any;
  email: any;
  tel: any;

  constructor(
    full_name: any,
    username: any,
    password: any,
    role: any,
    email: any,
    tel: any,
  ) {
    this.full_name = full_name;
    this.username = username;
    this.password = password;
    this.role = role;
    this.email = email;
    this.tel = tel;
  }
}
