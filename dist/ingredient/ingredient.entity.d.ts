import { Aisle } from './IngredientEnum';
import { RecipesEntity } from 'src/recipe/recipe.entity';
export declare class IngredientsEntity {
    id: number;
    name: string;
    aisle: Aisle;
    recipes: RecipesEntity[];
}
