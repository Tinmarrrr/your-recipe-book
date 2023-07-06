"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const recipe_entity_1 = require("./recipe.entity");
const typeorm_2 = require("typeorm");
const ingredient_entity_1 = require("../ingredient/ingredient.entity");
let RecipeService = exports.RecipeService = class RecipeService {
    constructor(recipeRepository, ingredientRepository) {
        this.recipeRepository = recipeRepository;
        this.ingredientRepository = ingredientRepository;
    }
    async addRecipe(recipeEntity) {
        const ingredients = await this.ingredientRepository
            .createQueryBuilder('ingredient')
            .where('ingredient.name IN (:...names)', { names: recipeEntity.ingredients.map(ingredient => ingredient.name) })
            .getMany();
        const recipe = new recipe_entity_1.RecipesEntity();
        recipe.name = recipeEntity.name;
        recipe.type = recipeEntity.type;
        recipe.ingredients = ingredients;
        recipe.instructions = recipeEntity.instructions;
        return this.recipeRepository.save(recipe);
    }
    async findAll() {
        return await this.recipeRepository.find({ relations: ['ingredients'] });
    }
    async findByName(req) {
        return await this.recipeRepository.findOne({ where: { name: req.name } });
    }
    async updateRecipe(req) {
        const recipe = await this.recipeRepository.findOne({ where: { id: req.id } });
        if (!recipe) {
            throw new common_1.HttpException('Recipe does not exist.', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.recipeRepository.update({ id: req.id }, req);
        return await this.recipeRepository.findOne({ where: { id: req.id } });
    }
    async deleteById(req) {
        const recipe = await this.recipeRepository.findOne({ where: { id: req.id } });
        if (!recipe) {
            throw new common_1.HttpException('Recipe does not exist.', common_1.HttpStatus.BAD_REQUEST);
        }
        await this.recipeRepository.delete({ id: req.id });
        return recipe;
    }
};
exports.RecipeService = RecipeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recipe_entity_1.RecipesEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(ingredient_entity_1.IngredientsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RecipeService);
//# sourceMappingURL=recipe.service.js.map