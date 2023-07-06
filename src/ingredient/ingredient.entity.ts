import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToMany, JoinTable } from 'typeorm';
import { Aisle } from './IngredientEnum';
import { RecipesEntity } from 'src/recipe/recipe.entity';

@Entity()
export class IngredientsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({
    type: "enum",
    enum: Aisle,
    default: Aisle.CONDIMENT
  })
  aisle: Aisle;

  @ManyToMany(() => RecipesEntity)
  @JoinTable({
    name: "recipes_ingredients",
    joinColumn: { name: "ingredient_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "recipe_id", referencedColumnName: "id" },
  })
  recipes: RecipesEntity[];

}
