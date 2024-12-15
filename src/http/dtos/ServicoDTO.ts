import { IsDecimal, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ServicoDTO{
    id_servico?: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsString()
    descricao: string;

    @IsNotEmpty()
    @IsNumber()
    preco: number;

    @IsNotEmpty()
    @IsNumber()
    duracao: number;

    @IsNotEmpty()
    @IsNumber()
    qtd_profissionais: number;

    @IsNotEmpty()
    @IsString()
    disponibilidade: string;

    @IsNotEmpty()
    @IsNumber()
    id_categoria: number;
}