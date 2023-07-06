import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IngredientsEntity } from './ingredient.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IngredientDto } from './ingredient.dto';
import { Repository } from 'typeorm';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(IngredientsEntity)
    private ingredientsRepository: Repository<IngredientsEntity>
  ) { }

  async addIngredient(ingredient: IngredientDto): Promise<IngredientsEntity> {
    const newIngredient = this.ingredientsRepository.create(ingredient);
    return await this.ingredientsRepository.save(newIngredient);
  }

  async findAll(): Promise<IngredientsEntity[]> {
    return await this.ingredientsRepository.find();
  }

  async findByName(req: any): Promise<IngredientsEntity> {
    return await this.ingredientsRepository.findOne({ where: { name: req.name } });
  }

  async findById(req: any): Promise<IngredientsEntity> {
    return await this.ingredientsRepository.findOne({ where: { id: req.id } });
  }

  async updateIngredient(req: any): Promise<IngredientsEntity> {
    const ingredient = await this.ingredientsRepository.findOne({ where: { id: req.id } });
    if (!ingredient) {
      throw new HttpException('Ingredient does not exist.', HttpStatus.BAD_REQUEST);
    }
    await this.ingredientsRepository.update({ id: req.id }, req);
    return await this.ingredientsRepository.findOne({ where: { id: req.id } });
  }

  async deleteById(req: any): Promise<IngredientsEntity> {
    const ingredient = await this.ingredientsRepository.findOne({ where: { id: req.id } });
    if (!ingredient) {
      throw new HttpException('Ingredient does not exist.', HttpStatus.BAD_REQUEST);
    }
    await this.ingredientsRepository.delete({ id: req.id });
    return ingredient;
  }
}
