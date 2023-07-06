import { IngredientsEntity } from './ingredient.entity';
import { IngredientDto } from './ingredient.dto';
import { Repository } from 'typeorm';
export declare class IngredientService {
    private ingredientsRepository;
    constructor(ingredientsRepository: Repository<IngredientsEntity>);
    addIngredient(ingredient: IngredientDto): Promise<IngredientsEntity>;
    findAll(): Promise<IngredientsEntity[]>;
    findByName(req: any): Promise<IngredientsEntity>;
    findById(req: any): Promise<IngredientsEntity>;
    updateIngredient(req: any): Promise<IngredientsEntity>;
    deleteById(req: any): Promise<IngredientsEntity>;
}
