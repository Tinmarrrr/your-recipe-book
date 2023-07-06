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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesEntity = void 0;
const class_validator_1 = require("class-validator");
const ingredient_entity_1 = require("../ingredient/ingredient.entity");
const typeorm_1 = require("typeorm");
let RecipesEntity = exports.RecipesEntity = class RecipesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RecipesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipesEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipesEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecipesEntity.prototype, "instructions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => ingredient_entity_1.IngredientsEntity),
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.JoinTable)({
        name: "recipes_ingredients",
        joinColumn: { name: "recipe_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "ingredient_id", referencedColumnName: "id" },
    }),
    __metadata("design:type", Array)
], RecipesEntity.prototype, "ingredients", void 0);
exports.RecipesEntity = RecipesEntity = __decorate([
    (0, typeorm_1.Entity)()
], RecipesEntity);
//# sourceMappingURL=recipe.entity.js.map