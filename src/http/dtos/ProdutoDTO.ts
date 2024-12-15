import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProdutoDTO{
    id_produto?: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsNumber()
    valor: number;
    
    @IsNotEmpty()
    @IsNumber()
    qtd_estoque: number;
    
    @IsNotEmpty()
    @IsNumber()
    id_fornecedor: number;
}