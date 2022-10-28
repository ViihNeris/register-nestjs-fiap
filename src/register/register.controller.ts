import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    @Post()
    async createRegister(@Body() req: CreateRegisterDTO): Promise<string> {
        return this.registerService.createRegister(req);
    }

    @Post('validateCustomer')
    async validateCustomer(@Body() req) {
        const { name, email, password, site, phone } = req

        return this.registerService.validateCustomer(name, email, password, site, phone);
    }
}
