export class Env {
  public static readonly BASE_URL: string =   process.env.URL || "";
  public static readonly USERNAME: string =  process.env.USERNAME;
  public static readonly PASSWORD: string =  process.env.PASSWORD;
  public static readonly ENV: string =  process.env.ENV;
}