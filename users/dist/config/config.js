"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadConfig = void 0;
const Joi = __importStar(require("joi"));
const dotenv = __importStar(require("dotenv"));
const loadConfig = () => {
    dotenv.config();
    const envSchema = Joi.object({
        NODE_ENV: Joi.string()
            .valid('development', 'production', 'test')
            .default('development'),
        SERVER_PORT: Joi.number()
            .default(3000),
        DATABASE_URL: Joi.string()
            .uri()
            .required(),
        KAFKA_BROKER: Joi.string().default("localhost:9092"),
        KAFKA_CLIENTID: Joi.string().default("user_service"),
        KAFKA_GROUPID: Joi.string().default("user_group")
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
        }
    };
};
exports.loadConfig = loadConfig;
