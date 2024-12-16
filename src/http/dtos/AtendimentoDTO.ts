import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AtendimentoDTO{
    id_atendimento?: number;

    @IsNotEmpty()
    @IsNumber()
    id_agendamento: number;

    @IsNotEmpty()
    @IsNumber()
    id_servico: number;

    @IsNotEmpty()
    @IsNumber()
    tempoGasto: number;
    
    @IsNotEmpty()
    @IsString()
    produtosUtilizados: string;
}