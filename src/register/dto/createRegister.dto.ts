import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, IsPhoneNumber, IsOptional } from "class-validator";

export class CreateRegisterDTO {
    //  name, email, password, site, phone
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsNotEmpty()
    @IsString()
    site: string;

    @IsOptional()
    phone?: string;
    
}