import { IngredientService } from './ingredient.service';
import { IngredientDto } from './ingredient.dto';
export declare class IngredientsController {
    private ingredientService;
    constructor(ingredientService: IngredientService);
    create(ingredient: IngredientDto): Promise<import("./ingredient.entity").IngredientsEntity>;
    findall(): Promise<import("./ingredient.entity").IngredientsEntity[]>;
    findByName(name: string): Promise<import("./ingredient.entity").IngredientsEntity>;
    update(ingredient: IngredientDto): Promise<import("./ingredient.entity").IngredientsEntity>;
    deleteById(id: any): Promise<import("./ingredient.entity").IngredientsEntity>;
}
