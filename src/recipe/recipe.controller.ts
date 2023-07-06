import { Body, Controller, Delete, Get, Patch, Post, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-exception';
import { RecipeService } from './recipe.service';
import { RecipeDto } from './recipe.dto';

@Controller('recipes')
@UseFilters(new HttpExceptionFilter())
export class RecipeController {
  constructor(private recipeService: RecipeService) { }

  @Post('/addRecipe')
  async create(@Body() recipe: RecipeDto) {
    return this.recipeService.addRecipe(recipe)
  }

  @Get('/findAll')
  findall() {
    return this.recipeService.findAll();
  }

  @Get('/findByName')
  async findByName(@Body() name: string) {
    return await this.recipeService.findByName(name);
  }

  @Patch('/update')
  async update(@Body() recipe: RecipeDto) {
    return await this.recipeService.updateRecipe(recipe);
  }
  
  @Delete('/deleteById')
  async deleteById(@Body() id: any) {
    console.log('toto', id);
    return await this.recipeService.deleteById(id);
  }
}
