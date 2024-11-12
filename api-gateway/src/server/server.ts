import { Config } from "@app/config/config";
import * as express from "express";

export class Server {
  express: express.Express;
  cfg: Config;
}
