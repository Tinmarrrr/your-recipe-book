import { IngredientsEntity } from 'src/ingredient/ingredient.entity';
export declare class RecipesEntity {
    id: number;
    name: string;
    type: string;
    instructions: string;
    ingredients: IngredientsEntity[];
}
