import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class AgendamentoDTO{
    id_agendamento?: number;

    @IsDateString()
    @IsNotEmpty()
    data: Date;
    
    @IsString()
    @IsNotEmpty()
    hora: string;

    @IsString()
    @IsNotEmpty()
    cpf_cliente: string;

    @IsString()
    @IsNotEmpty()
    matricula_func: string;
}