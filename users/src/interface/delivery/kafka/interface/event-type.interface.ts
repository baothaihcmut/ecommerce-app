import { KafkaMessage } from "./message.interface";

export type HandleFunction = (message: KafkaMessage<any>) => Promise<void>;
