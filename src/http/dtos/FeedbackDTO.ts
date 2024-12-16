import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class FeedbackDTO{
    id_feedback?: number;

    @IsOptional()
    @IsString()
    descricao: string;

    @IsOptional()
    @IsNumber()
    classificacao: number;

    @IsString()
    selo_cortesia: string;

    @IsString()
    selo_limpeza: string;

    @IsString()
    selo_eficiencia: string;

    @IsString()
    selo_satisfacao: string;

    @IsString()
    selo_orientacao: string;
    
    @IsNotEmpty()
    @IsNumber()
    id_atendimento: number;
}