import { IsNotEmpty, IsString, IsEmail, MinLength, MaxLength, IsPhoneNumber } from "class-validator";

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

    @IsPhoneNumber()
    phone?: number;
    
}