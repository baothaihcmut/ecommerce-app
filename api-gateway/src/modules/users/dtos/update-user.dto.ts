import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Gender } from "./gender.enum";
import { Role } from "./role.enum";
import { Type } from "class-transformer";

export default class UpdateUserDTO {
  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

  @IsOptional()
  @IsString()
  phone_number?: string;

  @IsOptional()
  @IsString()
  address_line_1?: string;

  @IsOptional()
  @IsString()
  address_line_2?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  nation?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsEnum(Role)
  role?: Role;

  @IsOptional()
  @IsDateString()
  date_of_birth?: Date; // Assuming Timestamp is a date string, or use a custom validator for Timestamp

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateCustomerDTO) // Assuming Customer is a class
  customer?: UpdateCustomerDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateShipperDTO) // Assuming Shipper is a class
  shipper?: UpdateShipperDTO;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateShopOwnerDTO) // Assuming ShopOwner is a class
  shop_owner?: UpdateShopOwnerDTO;
}
export class UpdateCustomerDTO {}
export class UpdateShipperDTO {
  @IsOptional()
  @IsString()
  shipmentInventoryId?: string;
}
export class UpdateShopOwnerDTO {}
