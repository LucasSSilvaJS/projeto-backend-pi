import { registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface, ValidatorOptions } from "class-validator";
import { AppDataSource } from "../../database/data-source";
import { Not } from "typeorm";

@ValidatorConstraint({async: true})
export class isUniqueConstraint implements ValidatorConstraintInterface{
    public defaultMessage(): string {
        return `$property is already in use`
    }

    async validate(value: any, args: ValidationArguments): Promise<boolean>{
        const [entity, field] = args.constraints;

        const repository = AppDataSource.getRepository(entity);
        const isUpdate: boolean = args.object["id"] !== undefined;
        let count = 0;
        
        if(!isUpdate){
            count = await repository.count({where: { [field]: value } });
        }else{
            count = await repository.count({where: { [field]: value, id: Not(args.object["id"]) } });
        }

        return count <= 0;
    }
}

export function IsUnique(entity: any, field: string, validationOptions?: ValidatorOptions){
    return (object: Object, propertyName: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [entity, field],
            validator: isUniqueConstraint
        });
    }
}