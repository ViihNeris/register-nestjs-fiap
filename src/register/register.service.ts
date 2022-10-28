import { Injectable } from '@nestjs/common';

@Injectable()
export class RegisterService {
    async createRegister(req): Promise<string> {
        return `Cliente ${req.name} cadastrado com sucesso!`
    }

    async validateCustomer(name: string, email: string, password: string, site: string, phone?: number) {
        console.log(`
            SERVICE:    
            
            --- CUSTOMER DATA ---
            
            NAME: ${name}
            PASSWORD: ${password}
            SITE: ${site}
            E-MAIL: ${email}
            PHONE: ${!phone ? "Não informado" : phone}

            DATA SUCESSFULLY REGISTERED!
        `)

        return { name, email, password, site, phone, situation: "Dados cadastrados com sucesso"}
    }
}
