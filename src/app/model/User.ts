export class User {
  username: any;
  password: any;
  role: any;
  email: any;
  civilStatus: any;
  gender: any;
  info: any;
  conditions: any;

  constructor(
    username: any,
    password: any,
    role: any,
    email: any,
    civilStatus: any,
    gender: any,
    info: any,
    conditions: any
  ) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.email = email;
    this.civilStatus = civilStatus;
    this.gender = gender;
    this.info = info;
    this.conditions = conditions;
  }
}
