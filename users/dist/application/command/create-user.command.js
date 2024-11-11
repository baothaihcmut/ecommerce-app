"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateUserCommand {
    constructor(firstName, lastName, email, phoneNumber, username, password, dateOfBirth, gender, addressLine1, addressLine2, city, nation, role, customer, shipper, showOwner) {
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
        this.customer = customer;
        this.shipper = shipper;
        this.shopOwner = showOwner;
        // Add any validations or domain rules here
    }
}
exports.default = CreateUserCommand;
