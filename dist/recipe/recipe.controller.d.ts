import { RecipeService } from './recipe.service';
import { RecipeDto } from './recipe.dto';
export declare class RecipeController {
    private recipeService;
    constructor(recipeService: RecipeService);
    create(recipe: RecipeDto): Promise<import("./recipe.entity").RecipesEntity>;
    findall(): Promise<import("./recipe.entity").RecipesEntity[]>;
    findByName(name: string): Promise<import("./recipe.entity").RecipesEntity>;
    update(recipe: RecipeDto): Promise<import("./recipe.entity").RecipesEntity>;
    deleteById(id: any): Promise<import("./recipe.entity").RecipesEntity>;
}
