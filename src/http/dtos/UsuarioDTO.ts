import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CadastrarDTO{
    id_usuario?: number;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;
    
    @IsNotEmpty()
    tipo_usuario: string;
}

export class EntrarDTO{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;
}