import { RequestHandler } from "express";
import UserService from "../service/UserService";

class UserController {
  private service: UserService = new UserService();

  login: RequestHandler = async (req, res) => {
    res.send(await this.service.login(req.body.userName, req.body.password));
  };

  getMenuByRole: RequestHandler = async (req, res) => {
    res.send(await this.service.getMenuByRole(req.body.role));
  };
}

export default new UserController();
