"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGender = getGender;
exports.getRole = getRole;
exports.getGenderNumber = getGenderNumber;
exports.getRoleNumber = getRoleNumber;
const gender_enum_1 = require("../../domain/entities/gender.enum");
const role_enum_1 = require("../../domain/entities/role.enum");
const GenderMap = {
    0: gender_enum_1.Gender.GENDER_UNSPECIFIED,
    1: gender_enum_1.Gender.GENDER_MALE,
    2: gender_enum_1.Gender.GENDER_FEMALE,
    3: gender_enum_1.Gender.GENDER_OTHER,
};
const RoleMap = {
    0: role_enum_1.Role.ROLE_UNSPECIFIED,
    1: role_enum_1.Role.ROLE_CUSTOMER,
    2: role_enum_1.Role.ROLE_SHIPPER,
    3: role_enum_1.Role.ROLE_SHOPOWNER,
};
const GenderReverseMap = {
    [gender_enum_1.Gender.GENDER_UNSPECIFIED]: 0,
    [gender_enum_1.Gender.GENDER_MALE]: 1,
    [gender_enum_1.Gender.GENDER_FEMALE]: 2,
    [gender_enum_1.Gender.GENDER_OTHER]: 3,
};
const RoleReverseMap = {
    [role_enum_1.Role.ROLE_UNSPECIFIED]: 0,
    [role_enum_1.Role.ROLE_CUSTOMER]: 1,
    [role_enum_1.Role.ROLE_SHIPPER]: 2,
    [role_enum_1.Role.ROLE_SHOPOWNER]: 3,
};
function getGender(gender) {
    return GenderMap[gender] || "unspecified";
}
function getRole(role) {
    return RoleMap[role] || "unspecified";
}
function getGenderNumber(gender) {
    return GenderReverseMap[gender];
}
function getRoleNumber(role) {
    return RoleReverseMap[role];
}
