import { IsString } from "class-validator";

export class CreateJustForYouDto {
    @IsString()
    name: string;

    @IsString()
    price: string;
}