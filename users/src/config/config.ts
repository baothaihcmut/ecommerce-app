import * as Joi from "joi";
import * as dotenv from "dotenv";

export interface ServerConfig {
  env: "development" | "production" | "test";
  port: number;
}

export interface DatabaseConfig {
  url: string;
}
export interface Config {
  serverConfig: ServerConfig;
  databaseConfig: DatabaseConfig;
}

export const loadConfig = (): Config => {
  dotenv.config();
  const envSchema = Joi.object({
    NODE_ENV: Joi.string()
      .valid("development", "production", "test")
      .default("development"),
    SERVER_PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().uri().required(),
  }).unknown(true); // Allow additional environment variables
  const { error, value: envVars } = envSchema.validate(process.env);
  if (error) {
    throw new Error("Validate Config fail");
  }
  return {
    serverConfig: {
      port: envVars.SERVER_PORT,
      env: envVars.NODE_ENV,
    },
    databaseConfig: {
      url: envVars.DATABASE_URL,
    },
  };
};
