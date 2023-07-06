import { IngredientsEntity } from 'src/ingredient/ingredient.entity';
export declare class RecipeDto {
    id: any;
    name: string;
    type: 'breakfast' | 'lunch' | 'dinner';
    ingredients: IngredientsEntity[];
    instructions: string;
}
