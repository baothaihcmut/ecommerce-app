import CreateUserCommand from "../../../../application/command/create-user.command";
import { CreateUserUC } from "../../../../application/usecase/create-user.usecase";
import { KafkaMessage } from "../interface/message.interface";

type HandleFunction = (message: KafkaMessage<any>) => Promise<void>;
type EventType = "user.create";
export class UserHandler {
  private mapHandler: Record<EventType, HandleFunction> = {
    "user.create": this.handleCreate,
  };
  private createUserUC: CreateUserUC;
  constructor(createUserUC: CreateUserUC) {
    this.createUserUC = createUserUC;
  }

  private async handleCreate(message: KafkaMessage<CreateUserCommand>) {
    try {
      const res = await this.createUserUC.createUser(message.data);
      console.log("Create user success.", res);
    } catch (e) {
      console.log(e);
    }
  }

  async handleMessage(topic: EventType, message: KafkaMessage<any>) {
    await this.mapHandler[topic](message);
  }
}
