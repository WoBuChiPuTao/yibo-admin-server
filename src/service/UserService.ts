import { Result } from "../utils";

const loginBack = {
  token: "6666aaa66666",
  role: {
    roleName: "老总",
    value: "super"
  }
};

const userInfo =  {
  userId: '111111',
  username: 'yibo Admin',
  avatar: undefined,
  desc: 'sb',
  realName: 'SB',
  roles: [
    {
      roleName: '老总',
      value: 'super'
    }
  ]
}

export default class UserService {
  async login() {
    return Result.success(loginBack);
  }
  async getUserInfoById() {
    return Result.success(userInfo);
  }
}
