"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(args) {
        this.id = args.id;
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.email = args.email;
        this.phoneNumber = args.phoneNumber;
        this.username = args.username;
        this.password = args.password;
        this.dateOfBirth = args.dateOfBirth;
        this.gender = args.gender;
        this.addressLine1 = args.addressLine1;
        this.addressLine2 = args.addressLine2;
        this.city = args.city;
        this.nation = args.nation;
        this.role = args.role;
        this.currentRefreshToken = "";
        // Add any validations or domain rules here
        this.validate();
    }
    validate() {
        // Example domain validation
        if (!this.firstName || !this.lastName) {
            throw new Error("First and Last name are required.");
        }
        if (this.email.indexOf("@") === -1) {
            throw new Error("Invalid email format.");
        }
        // Other business rules or constraints can be added here
    }
    // Example method: Updating user profile
    updateProfile(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.validate(); // Re-validate after update
    }
    // Example method: Change password
    changePassword(newPassword) {
        this.password = newPassword;
    }
    // Example method: Assigning a new role
    changeRole(newRole) {
        this.role = newRole;
    }
    setCustomerDetail(customer) {
        this.customer = customer;
    }
    setShipperDetail(shipper) {
        this.shipper = shipper;
    }
    setShopOwnerDetail(shopOwner) {
        this.shopOwner = shopOwner;
    }
}
exports.User = User;
