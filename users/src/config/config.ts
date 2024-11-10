import * as Joi from "joi";
import * as dotenv from "dotenv";

export interface ServerConfig {
  env: "development" | "production" | "test";
  port: number;
}

export interface DatabaseConfig {
  url: string;
}
export interface KafkaConfig {
  clientId: string;
  groupId: string;
  broker: string;
}
export interface Config {
  serverConfig: ServerConfig;
  databaseConfig: DatabaseConfig;
  kafkaConfig: KafkaConfig;
}

export const loadConfig = (): Config => {
  dotenv.config();
  const envSchema = Joi.object({
    NODE_ENV: Joi.string()
      .valid("development", "production", "test")
      .default("development"),
    SERVER_PORT: Joi.number().default(3000),
    DATABASE_URL: Joi.string().uri().required(),
    KAFKA_BROKER: Joi.string().default("localhost:9092"),
    KAFKA_CLIENTID: Joi.string().default("user_service"),
    KAFKA_GROUPID: Joi.string().default("user_group"),
  }).unknown(true); // Allow additional environment variables
  const { error, value: envVars } = envSchema.validate(process.env);
  if (error) {
    throw new Error("Validate Config fail");
  }

  return {
    serverConfig: {
      port: envVars.PORT,
      env: envVars.NODE_ENV,
    },
    databaseConfig: {
      url: envVars.DATABASE_URL,
    },
    kafkaConfig: {
      broker: envVars.KAFKA_BROKER,
      clientId: envVars.KAFKA_CLIENTID,
      groupId: envVars.KAFKA_GROUPID,
    },
  };
};
