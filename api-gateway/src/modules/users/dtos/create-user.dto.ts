import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Gender } from "./gender.enum";
import { Role } from "./role.enum";
import { Type } from "class-transformer";

export default class CreateUserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
  @IsString()
  username: string;
  @IsString()
  password: string;

  @IsString()
  phoneNumber: string;

  @IsEmail()
  email: string;

  @IsString()
  addressLine1: string;

  @IsString()
  addressLine2: string;

  @IsString()
  city: string;

  @IsString()
  nation: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsDateString()
  dateOfBirth: Date; // Assuming Timestamp is a date string, or use a custom validator for Timestamp

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateCustomerDTO) // Assuming Customer is a class
  customer?: CreateCustomerDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateShipperDTO) // Assuming Shipper is a class
  shipper?: CreateShipperDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateShopOwnerDTO) // Assuming ShopOwner is a class
  shopOwner?: CreateShopOwnerDTO;
}
export class CreateCustomerDTO {}
export class CreateShipperDTO {
  @IsString()
  shipmentInventoryId: string;
}
export class CreateShopOwnerDTO {}
