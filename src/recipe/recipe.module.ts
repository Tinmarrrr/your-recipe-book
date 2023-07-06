import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecipesEntity } from "./recipe.entity";
import { RecipeService } from "./recipe.service";
import { RecipeController } from "./recipe.controller";
import { IngredientsEntity } from "src/ingredient/ingredient.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([RecipesEntity, IngredientsEntity]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule { }
