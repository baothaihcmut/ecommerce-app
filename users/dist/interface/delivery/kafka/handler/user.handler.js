"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = void 0;
const constance_1 = require("../../../../common/constance");
class UserHandler {
    constructor(createUserUC) {
        this.mapHandler = {
            USER_CREATE: this.handleCreate,
        };
        this.createUserUC = createUserUC;
    }
    async handleCreate(message) {
        try {
            const res = await this.createUserUC.createUser(message.data);
            console.log("Create user success.", res);
        }
        catch (e) {
            console.log(e);
        }
    }
    async initHandler(router) {
        router.registerHandler(constance_1.USER_CREATE, this.handleCreate);
    }
}
exports.UserHandler = UserHandler;
