import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class NotificacaoDTO{
    @IsNotEmpty()
    @IsNumber()
    id_notificacao: number;

    @IsNotEmpty()
    @IsString()
    tipo: string;

    @IsNotEmpty()
    @IsDateString()
    dataEnvio: Date;

    @IsNotEmpty()
    @IsString()
    cpf_cliente: string;
}