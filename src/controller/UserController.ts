import { RequestHandler } from "express";
import UserService from "../service/UserService";

class UserController {
  private service: UserService = new UserService();

  login: RequestHandler = async (req, res) => {
    res.send(await this.service.login());
  };

  getUserInfoById: RequestHandler = async (req, res) => {
    res.send(await this.service.getUserInfoById());
  };
}

export default new UserController();
