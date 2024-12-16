import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class NotificacaoDTO{
    id_notificacao?: number;

    @IsNotEmpty()
    @IsString()
    tipo: string;

    @IsNotEmpty()
    @IsDateString()
    dataEnvio: Date;

    @IsNotEmpty()
    @IsNumber()
    id_cliente: number;
}