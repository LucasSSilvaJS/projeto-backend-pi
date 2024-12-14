import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class HorarioDTO{
    @IsNotEmpty()
    @IsNumber()
    id_horario: number;
    
    @IsNotEmpty()
    @IsDateString()
    diaSemana: Date;

    @IsNotEmpty()
    @IsString()
    horaInicio: string;
    
    @IsNotEmpty()
    @IsString()
    horaFim: string;
}