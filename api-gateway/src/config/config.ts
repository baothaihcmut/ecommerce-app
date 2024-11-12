import * as dotenv from "dotenv";
import * as Joi from "joi";

export interface Config {
  serverConfig: APIGatewayConfig;
  userServiceConfig: UserServiceConfig;
}

export interface APIGatewayConfig {
  port: number;
  env: "development" | "production" | "test";
}

export interface UserServiceConfig {
  host: string;
}

export const loadConfig = (): Config => {
  dotenv.config();
  const envSchema = Joi.object({
    NODE_ENV: Joi.string()
      .valid("development", "production", "test")
      .default("development"),
    SERVER_PORT: Joi.number().default(3000),
    USER_SERVICE_HOST: Joi.string().required(),
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
    userServiceConfig: {
      host: envVars.USER_SERVICE_HOST,
    },
  };
};
