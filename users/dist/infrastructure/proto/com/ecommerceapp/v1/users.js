"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: com/ecommerceapp/v1/users.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersServiceClient = exports.UsersServiceService = exports.CreateUserResponse = exports.ShopOwner = exports.Shipper = exports.Customer = exports.CreateShipperCommand = exports.CreateShopOwnerCommand = exports.CreateCustomerCommand = exports.CreateUserRequest = exports.Role = exports.Gender = exports.protobufPackage = void 0;
exports.genderFromJSON = genderFromJSON;
exports.genderToJSON = genderToJSON;
exports.roleFromJSON = roleFromJSON;
exports.roleToJSON = roleToJSON;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const grpc_js_1 = require("@grpc/grpc-js");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "com.ecommerceapp.v1";
var Gender;
(function (Gender) {
    Gender[Gender["GENDER_UNSPECIFIED"] = 0] = "GENDER_UNSPECIFIED";
    Gender[Gender["GENDER_MALE"] = 1] = "GENDER_MALE";
    Gender[Gender["GENDER_FEMALE"] = 2] = "GENDER_FEMALE";
    Gender[Gender["GENDER_OTHER"] = 3] = "GENDER_OTHER";
    Gender[Gender["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Gender || (exports.Gender = Gender = {}));
function genderFromJSON(object) {
    switch (object) {
        case 0:
        case "GENDER_UNSPECIFIED":
            return Gender.GENDER_UNSPECIFIED;
        case 1:
        case "GENDER_MALE":
            return Gender.GENDER_MALE;
        case 2:
        case "GENDER_FEMALE":
            return Gender.GENDER_FEMALE;
        case 3:
        case "GENDER_OTHER":
            return Gender.GENDER_OTHER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Gender.UNRECOGNIZED;
    }
}
function genderToJSON(object) {
    switch (object) {
        case Gender.GENDER_UNSPECIFIED:
            return "GENDER_UNSPECIFIED";
        case Gender.GENDER_MALE:
            return "GENDER_MALE";
        case Gender.GENDER_FEMALE:
            return "GENDER_FEMALE";
        case Gender.GENDER_OTHER:
            return "GENDER_OTHER";
        case Gender.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Role Enum */
var Role;
(function (Role) {
    Role[Role["ROLE_UNSPECIFIED"] = 0] = "ROLE_UNSPECIFIED";
    Role[Role["ROLE_CUSTOMER"] = 1] = "ROLE_CUSTOMER";
    Role[Role["ROLE_SHIPPER"] = 2] = "ROLE_SHIPPER";
    Role[Role["ROLE_SHOPOWNER"] = 3] = "ROLE_SHOPOWNER";
    Role[Role["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Role || (exports.Role = Role = {}));
function roleFromJSON(object) {
    switch (object) {
        case 0:
        case "ROLE_UNSPECIFIED":
            return Role.ROLE_UNSPECIFIED;
        case 1:
        case "ROLE_CUSTOMER":
            return Role.ROLE_CUSTOMER;
        case 2:
        case "ROLE_SHIPPER":
            return Role.ROLE_SHIPPER;
        case 3:
        case "ROLE_SHOPOWNER":
            return Role.ROLE_SHOPOWNER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Role.UNRECOGNIZED;
    }
}
function roleToJSON(object) {
    switch (object) {
        case Role.ROLE_UNSPECIFIED:
            return "ROLE_UNSPECIFIED";
        case Role.ROLE_CUSTOMER:
            return "ROLE_CUSTOMER";
        case Role.ROLE_SHIPPER:
            return "ROLE_SHIPPER";
        case Role.ROLE_SHOPOWNER:
            return "ROLE_SHOPOWNER";
        case Role.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseCreateUserRequest() {
    return {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        username: "",
        password: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        nation: "",
        gender: 0,
        role: 0,
        dateOfBirth: undefined,
        customer: undefined,
        shipper: undefined,
        shopOwner: undefined,
    };
}
exports.CreateUserRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.firstName !== "") {
            writer.uint32(18).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(26).string(message.lastName);
        }
        if (message.email !== "") {
            writer.uint32(34).string(message.email);
        }
        if (message.phoneNumber !== "") {
            writer.uint32(42).string(message.phoneNumber);
        }
        if (message.username !== "") {
            writer.uint32(50).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(58).string(message.password);
        }
        if (message.addressLine1 !== "") {
            writer.uint32(66).string(message.addressLine1);
        }
        if (message.addressLine2 !== "") {
            writer.uint32(74).string(message.addressLine2);
        }
        if (message.city !== "") {
            writer.uint32(82).string(message.city);
        }
        if (message.nation !== "") {
            writer.uint32(90).string(message.nation);
        }
        if (message.gender !== 0) {
            writer.uint32(96).int32(message.gender);
        }
        if (message.role !== 0) {
            writer.uint32(104).int32(message.role);
        }
        if (message.dateOfBirth !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.dateOfBirth), writer.uint32(114).fork()).join();
        }
        if (message.customer !== undefined) {
            exports.CreateCustomerCommand.encode(message.customer, writer.uint32(122).fork()).join();
        }
        if (message.shipper !== undefined) {
            exports.CreateShipperCommand.encode(message.shipper, writer.uint32(130).fork()).join();
        }
        if (message.shopOwner !== undefined) {
            exports.CreateCustomerCommand.encode(message.shopOwner, writer.uint32(138).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.phoneNumber = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.password = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.addressLine1 = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.addressLine2 = reader.string();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.city = reader.string();
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.nation = reader.string();
                    continue;
                }
                case 12: {
                    if (tag !== 96) {
                        break;
                    }
                    message.gender = reader.int32();
                    continue;
                }
                case 13: {
                    if (tag !== 104) {
                        break;
                    }
                    message.role = reader.int32();
                    continue;
                }
                case 14: {
                    if (tag !== 114) {
                        break;
                    }
                    message.dateOfBirth = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                }
                case 15: {
                    if (tag !== 122) {
                        break;
                    }
                    message.customer = exports.CreateCustomerCommand.decode(reader, reader.uint32());
                    continue;
                }
                case 16: {
                    if (tag !== 130) {
                        break;
                    }
                    message.shipper = exports.CreateShipperCommand.decode(reader, reader.uint32());
                    continue;
                }
                case 17: {
                    if (tag !== 138) {
                        break;
                    }
                    message.shopOwner = exports.CreateCustomerCommand.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            phoneNumber: isSet(object.phoneNumber) ? globalThis.String(object.phoneNumber) : "",
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            password: isSet(object.password) ? globalThis.String(object.password) : "",
            addressLine1: isSet(object.addressLine1) ? globalThis.String(object.addressLine1) : "",
            addressLine2: isSet(object.addressLine2) ? globalThis.String(object.addressLine2) : "",
            city: isSet(object.city) ? globalThis.String(object.city) : "",
            nation: isSet(object.nation) ? globalThis.String(object.nation) : "",
            gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
            role: isSet(object.role) ? roleFromJSON(object.role) : 0,
            dateOfBirth: isSet(object.dateOfBirth) ? fromJsonTimestamp(object.dateOfBirth) : undefined,
            customer: isSet(object.customer) ? exports.CreateCustomerCommand.fromJSON(object.customer) : undefined,
            shipper: isSet(object.shipper) ? exports.CreateShipperCommand.fromJSON(object.shipper) : undefined,
            shopOwner: isSet(object.shopOwner) ? exports.CreateCustomerCommand.fromJSON(object.shopOwner) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.phoneNumber !== "") {
            obj.phoneNumber = message.phoneNumber;
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.password !== "") {
            obj.password = message.password;
        }
        if (message.addressLine1 !== "") {
            obj.addressLine1 = message.addressLine1;
        }
        if (message.addressLine2 !== "") {
            obj.addressLine2 = message.addressLine2;
        }
        if (message.city !== "") {
            obj.city = message.city;
        }
        if (message.nation !== "") {
            obj.nation = message.nation;
        }
        if (message.gender !== 0) {
            obj.gender = genderToJSON(message.gender);
        }
        if (message.role !== 0) {
            obj.role = roleToJSON(message.role);
        }
        if (message.dateOfBirth !== undefined) {
            obj.dateOfBirth = message.dateOfBirth.toISOString();
        }
        if (message.customer !== undefined) {
            obj.customer = exports.CreateCustomerCommand.toJSON(message.customer);
        }
        if (message.shipper !== undefined) {
            obj.shipper = exports.CreateShipperCommand.toJSON(message.shipper);
        }
        if (message.shopOwner !== undefined) {
            obj.shopOwner = exports.CreateCustomerCommand.toJSON(message.shopOwner);
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserRequest();
        message.id = object.id ?? "";
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.email = object.email ?? "";
        message.phoneNumber = object.phoneNumber ?? "";
        message.username = object.username ?? "";
        message.password = object.password ?? "";
        message.addressLine1 = object.addressLine1 ?? "";
        message.addressLine2 = object.addressLine2 ?? "";
        message.city = object.city ?? "";
        message.nation = object.nation ?? "";
        message.gender = object.gender ?? 0;
        message.role = object.role ?? 0;
        message.dateOfBirth = object.dateOfBirth ?? undefined;
        message.customer = (object.customer !== undefined && object.customer !== null)
            ? exports.CreateCustomerCommand.fromPartial(object.customer)
            : undefined;
        message.shipper = (object.shipper !== undefined && object.shipper !== null)
            ? exports.CreateShipperCommand.fromPartial(object.shipper)
            : undefined;
        message.shopOwner = (object.shopOwner !== undefined && object.shopOwner !== null)
            ? exports.CreateCustomerCommand.fromPartial(object.shopOwner)
            : undefined;
        return message;
    },
};
function createBaseCreateCustomerCommand() {
    return {};
}
exports.CreateCustomerCommand = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateCustomerCommand();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.CreateCustomerCommand.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseCreateCustomerCommand();
        return message;
    },
};
function createBaseCreateShopOwnerCommand() {
    return {};
}
exports.CreateShopOwnerCommand = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateShopOwnerCommand();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.CreateShopOwnerCommand.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseCreateShopOwnerCommand();
        return message;
    },
};
function createBaseCreateShipperCommand() {
    return { shipmentInventoryId: "" };
}
exports.CreateShipperCommand = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.shipmentInventoryId !== "") {
            writer.uint32(10).string(message.shipmentInventoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateShipperCommand();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.shipmentInventoryId = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            shipmentInventoryId: isSet(object.shipmentInventoryId) ? globalThis.String(object.shipmentInventoryId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.shipmentInventoryId !== "") {
            obj.shipmentInventoryId = message.shipmentInventoryId;
        }
        return obj;
    },
    create(base) {
        return exports.CreateShipperCommand.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateShipperCommand();
        message.shipmentInventoryId = object.shipmentInventoryId ?? "";
        return message;
    },
};
function createBaseCustomer() {
    return { point: 0 };
}
exports.Customer = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.point !== 0) {
            writer.uint32(8).uint64(message.point);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCustomer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.point = longToNumber(reader.uint64());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { point: isSet(object.point) ? globalThis.Number(object.point) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.point !== 0) {
            obj.point = Math.round(message.point);
        }
        return obj;
    },
    create(base) {
        return exports.Customer.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCustomer();
        message.point = object.point ?? 0;
        return message;
    },
};
function createBaseShipper() {
    return { shipmentInventoryId: "" };
}
exports.Shipper = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.shipmentInventoryId !== "") {
            writer.uint32(10).string(message.shipmentInventoryId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseShipper();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.shipmentInventoryId = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            shipmentInventoryId: isSet(object.shipmentInventoryId) ? globalThis.String(object.shipmentInventoryId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.shipmentInventoryId !== "") {
            obj.shipmentInventoryId = message.shipmentInventoryId;
        }
        return obj;
    },
    create(base) {
        return exports.Shipper.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseShipper();
        message.shipmentInventoryId = object.shipmentInventoryId ?? "";
        return message;
    },
};
function createBaseShopOwner() {
    return { numOfShop: 0 };
}
exports.ShopOwner = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.numOfShop !== 0) {
            writer.uint32(8).uint64(message.numOfShop);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseShopOwner();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.numOfShop = longToNumber(reader.uint64());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { numOfShop: isSet(object.numOfShop) ? globalThis.Number(object.numOfShop) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.numOfShop !== 0) {
            obj.numOfShop = Math.round(message.numOfShop);
        }
        return obj;
    },
    create(base) {
        return exports.ShopOwner.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseShopOwner();
        message.numOfShop = object.numOfShop ?? 0;
        return message;
    },
};
function createBaseCreateUserResponse() {
    return {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        username: "",
        addressLine1: "",
        addressLine2: undefined,
        city: "",
        nation: "",
        gender: 0,
        role: 0,
        dateOfBirth: undefined,
        customer: undefined,
        shipper: undefined,
        shopOwner: undefined,
    };
}
exports.CreateUserResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.firstName !== "") {
            writer.uint32(18).string(message.firstName);
        }
        if (message.lastName !== "") {
            writer.uint32(26).string(message.lastName);
        }
        if (message.email !== "") {
            writer.uint32(34).string(message.email);
        }
        if (message.phoneNumber !== "") {
            writer.uint32(42).string(message.phoneNumber);
        }
        if (message.username !== "") {
            writer.uint32(50).string(message.username);
        }
        if (message.addressLine1 !== "") {
            writer.uint32(58).string(message.addressLine1);
        }
        if (message.addressLine2 !== undefined) {
            writer.uint32(66).string(message.addressLine2);
        }
        if (message.city !== "") {
            writer.uint32(74).string(message.city);
        }
        if (message.nation !== "") {
            writer.uint32(82).string(message.nation);
        }
        if (message.gender !== 0) {
            writer.uint32(88).int32(message.gender);
        }
        if (message.role !== 0) {
            writer.uint32(96).int32(message.role);
        }
        if (message.dateOfBirth !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.dateOfBirth), writer.uint32(106).fork()).join();
        }
        if (message.customer !== undefined) {
            exports.Customer.encode(message.customer, writer.uint32(114).fork()).join();
        }
        if (message.shipper !== undefined) {
            exports.Shipper.encode(message.shipper, writer.uint32(122).fork()).join();
        }
        if (message.shopOwner !== undefined) {
            exports.ShopOwner.encode(message.shopOwner, writer.uint32(130).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.firstName = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.lastName = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.phoneNumber = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.addressLine1 = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.addressLine2 = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.city = reader.string();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.nation = reader.string();
                    continue;
                }
                case 11: {
                    if (tag !== 88) {
                        break;
                    }
                    message.gender = reader.int32();
                    continue;
                }
                case 12: {
                    if (tag !== 96) {
                        break;
                    }
                    message.role = reader.int32();
                    continue;
                }
                case 13: {
                    if (tag !== 106) {
                        break;
                    }
                    message.dateOfBirth = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                }
                case 14: {
                    if (tag !== 114) {
                        break;
                    }
                    message.customer = exports.Customer.decode(reader, reader.uint32());
                    continue;
                }
                case 15: {
                    if (tag !== 122) {
                        break;
                    }
                    message.shipper = exports.Shipper.decode(reader, reader.uint32());
                    continue;
                }
                case 16: {
                    if (tag !== 130) {
                        break;
                    }
                    message.shopOwner = exports.ShopOwner.decode(reader, reader.uint32());
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
            phoneNumber: isSet(object.phoneNumber) ? globalThis.String(object.phoneNumber) : "",
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            addressLine1: isSet(object.addressLine1) ? globalThis.String(object.addressLine1) : "",
            addressLine2: isSet(object.addressLine2) ? globalThis.String(object.addressLine2) : undefined,
            city: isSet(object.city) ? globalThis.String(object.city) : "",
            nation: isSet(object.nation) ? globalThis.String(object.nation) : "",
            gender: isSet(object.gender) ? genderFromJSON(object.gender) : 0,
            role: isSet(object.role) ? roleFromJSON(object.role) : 0,
            dateOfBirth: isSet(object.dateOfBirth) ? fromJsonTimestamp(object.dateOfBirth) : undefined,
            customer: isSet(object.customer) ? exports.Customer.fromJSON(object.customer) : undefined,
            shipper: isSet(object.shipper) ? exports.Shipper.fromJSON(object.shipper) : undefined,
            shopOwner: isSet(object.shopOwner) ? exports.ShopOwner.fromJSON(object.shopOwner) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        if (message.phoneNumber !== "") {
            obj.phoneNumber = message.phoneNumber;
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.addressLine1 !== "") {
            obj.addressLine1 = message.addressLine1;
        }
        if (message.addressLine2 !== undefined) {
            obj.addressLine2 = message.addressLine2;
        }
        if (message.city !== "") {
            obj.city = message.city;
        }
        if (message.nation !== "") {
            obj.nation = message.nation;
        }
        if (message.gender !== 0) {
            obj.gender = genderToJSON(message.gender);
        }
        if (message.role !== 0) {
            obj.role = roleToJSON(message.role);
        }
        if (message.dateOfBirth !== undefined) {
            obj.dateOfBirth = message.dateOfBirth.toISOString();
        }
        if (message.customer !== undefined) {
            obj.customer = exports.Customer.toJSON(message.customer);
        }
        if (message.shipper !== undefined) {
            obj.shipper = exports.Shipper.toJSON(message.shipper);
        }
        if (message.shopOwner !== undefined) {
            obj.shopOwner = exports.ShopOwner.toJSON(message.shopOwner);
        }
        return obj;
    },
    create(base) {
        return exports.CreateUserResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserResponse();
        message.id = object.id ?? "";
        message.firstName = object.firstName ?? "";
        message.lastName = object.lastName ?? "";
        message.email = object.email ?? "";
        message.phoneNumber = object.phoneNumber ?? "";
        message.username = object.username ?? "";
        message.addressLine1 = object.addressLine1 ?? "";
        message.addressLine2 = object.addressLine2 ?? undefined;
        message.city = object.city ?? "";
        message.nation = object.nation ?? "";
        message.gender = object.gender ?? 0;
        message.role = object.role ?? 0;
        message.dateOfBirth = object.dateOfBirth ?? undefined;
        message.customer = (object.customer !== undefined && object.customer !== null)
            ? exports.Customer.fromPartial(object.customer)
            : undefined;
        message.shipper = (object.shipper !== undefined && object.shipper !== null)
            ? exports.Shipper.fromPartial(object.shipper)
            : undefined;
        message.shopOwner = (object.shopOwner !== undefined && object.shopOwner !== null)
            ? exports.ShopOwner.fromPartial(object.shopOwner)
            : undefined;
        return message;
    },
};
exports.UsersServiceService = {
    createUser: {
        path: "/com.ecommerceapp.v1.UsersService/CreateUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.CreateUserRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.CreateUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.CreateUserResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.CreateUserResponse.decode(value),
    },
};
exports.UsersServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.UsersServiceService, "com.ecommerceapp.v1.UsersService");
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new globalThis.Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof globalThis.Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new globalThis.Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToNumber(int64) {
    const num = globalThis.Number(int64.toString());
    if (num > globalThis.Number.MAX_SAFE_INTEGER) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    if (num < globalThis.Number.MIN_SAFE_INTEGER) {
        throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
    }
    return num;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
