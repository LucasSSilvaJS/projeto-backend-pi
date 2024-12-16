import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class EquipamentoDTO{
    id_equipamento?: number;

    @IsNotEmpty()
    @IsString()
    nome: string;
    
    @IsNotEmpty()
    @IsNumber()
    id_fornecedor: number;
}