import { Body, Controller, Delete, ForbiddenException, Get, Patch, Post, UseFilters } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { HttpExceptionFilter } from 'src/http-exception';
import { IngredientDto } from './ingredient.dto';

@Controller('ingredients')
@UseFilters(new HttpExceptionFilter())
export class IngredientsController {
  constructor(private ingredientService: IngredientService) { }

  @Post('/addIngredient')
  async create(@Body() ingredient: IngredientDto) {
    return this.ingredientService.addIngredient(ingredient)
  }

  @Get('/findAll')
  findall() {
    return this.ingredientService.findAll();
  }

  @Get('/findByName')
  async findByName(@Body() name: string) {
    return await this.ingredientService.findByName(name);
  }

  @Patch('/update')
  async update(@Body() ingredient: IngredientDto) {
    return await this.ingredientService.updateIngredient(ingredient);
  }

  @Delete('/deleteById')
  async deleteById(@Body() id: any) {
    return await this.ingredientService.deleteById(id);
  }
}
