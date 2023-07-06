import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipesEntity } from './recipe.entity';
import { Repository } from 'typeorm';
import { IngredientsEntity } from 'src/ingredient/ingredient.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(RecipesEntity)
    private readonly recipeRepository: Repository<RecipesEntity>,
    @InjectRepository(IngredientsEntity)
    private readonly ingredientRepository: Repository<IngredientsEntity>,
  ) { }


  async addRecipe(recipeEntity: RecipesEntity): Promise<RecipesEntity> {
    const ingredients = await this.ingredientRepository
      .createQueryBuilder('ingredient')
      .where('ingredient.name IN (:...names)', { names: recipeEntity.ingredients.map(ingredient => ingredient.name) })
      .getMany();

    const recipe = new RecipesEntity();
    recipe.name = recipeEntity.name;
    recipe.type = recipeEntity.type;
    recipe.ingredients = ingredients;
    recipe.instructions = recipeEntity.instructions;
    return this.recipeRepository.save(recipe);
  }

  async findAll(): Promise<RecipesEntity[]> {
    return await this.recipeRepository.find({ relations: ['ingredients'] });
  }


  async findByName(req: any): Promise<RecipesEntity> {
    return await this.recipeRepository.findOne({ where: { name: req.name } });
  }

  async updateRecipe(req: any): Promise<RecipesEntity> {
    const recipe = await this.recipeRepository.findOne({ where: { id: req.id } });
    if (!recipe) {
      throw new HttpException('Recipe does not exist.', HttpStatus.BAD_REQUEST);
    }
    await this.recipeRepository.update({ id: req.id }, req);
    return await this.recipeRepository.findOne({ where: { id: req.id } });
  }

  async deleteById(req: any): Promise<RecipesEntity> {
    const recipe = await this.recipeRepository.findOne({ where: { id: req.id } });
    if (!recipe) {
      throw new HttpException('Recipe does not exist.', HttpStatus.BAD_REQUEST);
    }
    await this.recipeRepository.delete({ id: req.id });
    return recipe;
  }

}
