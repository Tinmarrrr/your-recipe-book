import { IsNotEmpty } from 'class-validator';
import { IngredientsEntity } from 'src/ingredient/ingredient.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class RecipesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  instructions: string;

  @ManyToMany(() => IngredientsEntity)
  @IsNotEmpty()
  @JoinTable({
    name: "recipes_ingredients",
    joinColumn: { name: "recipe_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "ingredient_id", referencedColumnName: "id" },
  })
  ingredients: IngredientsEntity[];
}