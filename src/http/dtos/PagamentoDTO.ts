import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PagamentoDTO{
    id_pagamento?: number;

    @IsNotEmpty()
    @IsNumber()
    valor: number;

    @IsNotEmpty()
    @IsString()
    metodo_pag: string;

    @IsNotEmpty()
    @IsDateString()
    data: Date;

    @IsNotEmpty()
    @IsString()
    cpf_cliente: string;
}