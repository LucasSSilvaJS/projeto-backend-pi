import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";

export class ClienteDTO{
    @IsNotEmpty()
    @IsNumber()
    id_usuario: number;

    @IsNotEmpty()
    @IsString()
    @Length(11)
    cpf: string;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    @Length(11)
    telefone: string;
}