import { Gender } from "@app/domain/entities/gender.enum";
import { Role } from "@app/domain/entities/role.enum";

const GenderMap: { [key in number]: Gender } = {
  0: Gender.GENDER_UNSPECIFIED,
  1: Gender.GENDER_MALE,
  2: Gender.GENDER_FEMALE,
  3: Gender.GENDER_OTHER,
};
const RoleMap: { [key in number]: Role } = {
  0: Role.ROLE_UNSPECIFIED,
  1: Role.ROLE_CUSTOMER,
  2: Role.ROLE_SHIPPER,
  3: Role.ROLE_SHOPOWNER,
};
const GenderReverseMap: { [key in Gender]: number } = {
  [Gender.GENDER_UNSPECIFIED]: 0,
  [Gender.GENDER_MALE]: 1,
  [Gender.GENDER_FEMALE]: 2,
  [Gender.GENDER_OTHER]: 3,
};

const RoleReverseMap: { [key in Role]: number } = {
  [Role.ROLE_UNSPECIFIED]: 0,
  [Role.ROLE_CUSTOMER]: 1,
  [Role.ROLE_SHIPPER]: 2,
  [Role.ROLE_SHOPOWNER]: 3,
};

export function getGender(gender: number): Gender {
  return GenderMap[gender] || "unspecified";
}

export function getRole(role: number): Role {
  return RoleMap[role] || "unspecified";
}
export function getGenderNumber(gender: Gender): number {
  return GenderReverseMap[gender];
}

export function getRoleNumber(role: Role): number {
  return RoleReverseMap[role];
}
