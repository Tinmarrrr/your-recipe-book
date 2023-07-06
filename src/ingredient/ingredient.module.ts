import { Module } from '@nestjs/common';
import { IngredientsController } from './ingredient.controller';
import { IngredientService } from './ingredient.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientsEntity } from './ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IngredientsEntity])],
  controllers: [IngredientsController],
  providers: [IngredientService]
})
export class IngredientModule { }
