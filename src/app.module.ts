import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IngredientModule } from './ingredient/ingredient.module';
import { IngredientsEntity } from './ingredient/ingredient.entity';
import { RecipeService } from './recipe/recipe.service';
import { RecipesEntity } from './recipe/recipe.entity';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: null,
      database: 'mydata',
      entities: [IngredientsEntity, RecipesEntity],
      synchronize: true,
    }),
    IngredientModule,
    RecipeModule,
  ],
  providers: [],
})
export class AppModule { }
