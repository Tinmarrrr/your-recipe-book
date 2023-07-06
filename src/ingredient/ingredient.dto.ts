import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Aisle } from './IngredientEnum';

export class IngredientDto {
  @IsNotEmpty()
  @IsNumber()
  id: any;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  aisle: Aisle;
}
