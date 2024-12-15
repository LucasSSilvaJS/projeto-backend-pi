import { IsNotEmpty, IsString } from "class-validator";

export class CategoriaDTO{
    id_categoria?: number;

    @IsNotEmpty()
    @IsString()
    nome: string;
}