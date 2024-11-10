import CreateUserCommand from "@app/application/command/create-user.command";
import { CreateUserUC } from "@app/application/usecase/create-user.usecase";
import { USER_CREATE } from "@app/common/constance";
import { KafkaMessage } from "@app/interface/delivery/kafka/interface/message.interface";
import { AppRouter } from "@app/interface/delivery/kafka/router/app.router";

type HandleFunction = (message: KafkaMessage<any>) => Promise<void>;
export class UserHandler {
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

  async initHandler(router: AppRouter) {
    router.registerHandler(USER_CREATE, this.handleCreate);
  }
}
