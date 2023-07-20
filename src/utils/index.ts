export class Result {
  static success(data: any) {
    return {
      code: 200,
      message: "success",
      data,
    };
  }

  static error401(message: any) {
    return {
      code: 401,
      message,
    };
  }

  static error404(message: any) {
    return {
      code: 404,
      message,
    };
  }
}
