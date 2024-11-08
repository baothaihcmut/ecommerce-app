"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
class AppRouter {
    registerHandler(k, v) {
        this.mapHandler[k] = v;
    }
    constructor() {
        this.mapHandler = {};
    }
    handleMessage(topic, message) {
        this.mapHandler[topic](message);
    }
}
exports.AppRouter = AppRouter;
