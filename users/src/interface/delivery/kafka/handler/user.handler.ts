import CreateUserCommand from "../../../../application/command/create-user.command";
import { CreateUserUC } from "../../../../application/usecase/create-user.usecase";
import { USER_CREATE } from "../../../../common/constance";
import { KafkaMessage } from "../interface/message.interface";
import { AppRouter } from "../router/app.router";

type HandleFunction = (message: KafkaMessage<any>) => Promise<void>;
export class UserHandler {
  private mapHandler: Record<string, HandleFunction> = {
    USER_CREATE: this.handleCreate,
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

  async initHandler(router:AppRouter) {
    router.registerHandler(USER_CREATE,this.handleCreate);
  }
}
