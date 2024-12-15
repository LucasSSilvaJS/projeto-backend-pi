import { IsNotEmpty, IsString } from "class-validator";

export class FornecedorDTO{
    id_fornecedor?: number;

    @IsNotEmpty()
    @IsString()
    nome: string;
    
    @IsNotEmpty()
    @IsString()
    telefone: string;
    
    @IsNotEmpty()
    @IsString()
    email: string;
}