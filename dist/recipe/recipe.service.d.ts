import { RecipesEntity } from './recipe.entity';
import { Repository } from 'typeorm';
import { IngredientsEntity } from 'src/ingredient/ingredient.entity';
export declare class RecipeService {
    private readonly recipeRepository;
    private readonly ingredientRepository;
    constructor(recipeRepository: Repository<RecipesEntity>, ingredientRepository: Repository<IngredientsEntity>);
    addRecipe(recipeEntity: RecipesEntity): Promise<RecipesEntity>;
    findAll(): Promise<RecipesEntity[]>;
    findByName(req: any): Promise<RecipesEntity>;
    updateRecipe(req: any): Promise<RecipesEntity>;
    deleteById(req: any): Promise<RecipesEntity>;
}
