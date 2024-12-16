import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AgendamentoDTO{
    id_agendamento?: number;

    @IsString()
    @IsNotEmpty()
    data: Date;
    
    @IsString()
    @IsNotEmpty()
    hora: string;

    @IsNumber()
    @IsNotEmpty()
    id_cliente: number;
    
    @IsNumber()
    @IsNotEmpty()
    id_funcionario: number;
}