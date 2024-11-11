"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = UserService;
const app_error_1 = require("../../../../common/exception/app.error");
const utils_1 = require("../../../../common/utils/utils");
const constants_1 = require("@grpc/grpc-js/build/src/constants");
function UserService(createUserUC) {
    async function createUser(call, callback) {
        const dto = call.request;
        try {
            const res = await createUserUC.createUser({
                ...dto,
                gender: (0, utils_1.getGender)(dto.gender),
                role: (0, utils_1.getRole)(dto.role),
            });
            callback(null, {
                ...res,
                role: (0, utils_1.getRoleNumber)(res.role),
                gender: (0, utils_1.getGenderNumber)(res.gender),
            });
        }
        catch (e) {
            if (e instanceof app_error_1.AppError) {
                callback({
                    code: e.code,
                    message: e.message,
                }, undefined);
            }
            else {
                callback({
                    code: constants_1.Status.INTERNAL,
                    message: `Internal Error`,
                });
            }
        }
    }
    return {
        createUser,
    };
}
