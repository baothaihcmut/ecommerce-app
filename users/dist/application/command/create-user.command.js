"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const role_enum_1 = require("../../domain/entities/role.enum");
const user_entity_1 = require("../../domain/entities/user.entity");
class CreateUserCommand {
    constructor(id, firstName, lastName, email, phoneNumber, username, password, dateOfBirth, gender, addressLine1, addressLine2, city, nation, role, detail) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.username = username;
        this.password = password;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.nation = nation;
        this.role = role;
        this.detail = detail;
        // Add any validations or domain rules here
    }
    toEntity() {
        const user = new user_entity_1.User(this);
        if (user.role === role_enum_1.Role.Customer) {
            user.customer = this.detail;
            return user;
        }
        if (user.role === role_enum_1.Role.Shipper) {
            user.shipper = this.detail;
            return user;
        }
        if (user.role === role_enum_1.Role.ShopOwner) {
            user.shopOwner = this.detail;
            return user;
        }
        return user;
    }
}
exports.default = CreateUserCommand;
