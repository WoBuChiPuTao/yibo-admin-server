export class Result {
  static success(data: any) {
    return {
      code: 200,
      message: "success",
      data
    };
  }
}
