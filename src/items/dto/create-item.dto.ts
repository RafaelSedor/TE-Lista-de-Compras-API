import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateItemDto {
    @IsNotEmpty()
    name: string;

    @IsInt()
    quantity: number;

    @IsInt()
    shoppingListId: number;
}
