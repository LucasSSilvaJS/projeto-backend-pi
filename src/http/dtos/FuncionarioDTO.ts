import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class FuncionarioDTO{
    @IsNotEmpty()
    @IsNumber()
    id_usuario: number;

    @IsNotEmpty()
    @IsString()
    matricula: string;

    @IsNotEmpty()
    @IsString()
    funcao: string;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    disponibilidade: string;
}