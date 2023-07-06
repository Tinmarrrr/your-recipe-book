import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { IngredientsEntity } from 'src/ingredient/ingredient.entity';
import { JoinTable, ManyToMany } from 'typeorm';

export class RecipeDto {
  @IsNotEmpty()
  @IsNumber()
  id: any;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: 'breakfast' | 'lunch' | 'dinner';

  @ManyToMany(() => IngredientsEntity)
  @JoinTable()
  ingredients: IngredientsEntity[];
  

  @IsNotEmpty()
  @IsString()
  instructions: string;

  
}