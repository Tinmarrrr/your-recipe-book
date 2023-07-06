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
exports.IngredientsController = void 0;
const common_1 = require("@nestjs/common");
const ingredient_service_1 = require("./ingredient.service");
const http_exception_1 = require("../http-exception");
const ingredient_dto_1 = require("./ingredient.dto");
let IngredientsController = exports.IngredientsController = class IngredientsController {
    constructor(ingredientService) {
        this.ingredientService = ingredientService;
    }
    async create(ingredient) {
        return this.ingredientService.addIngredient(ingredient);
    }
    findall() {
        return this.ingredientService.findAll();
    }
    async findByName(name) {
        return await this.ingredientService.findByName(name);
    }
    async update(ingredient) {
        return await this.ingredientService.updateIngredient(ingredient);
    }
    async deleteById(id) {
        return await this.ingredientService.deleteById(id);
    }
};
__decorate([
    (0, common_1.Post)('/addIngredient'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ingredient_dto_1.IngredientDto]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/findAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IngredientsController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)('/findByName'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "findByName", null);
__decorate([
    (0, common_1.Patch)('/update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ingredient_dto_1.IngredientDto]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/deleteById'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "deleteById", null);
exports.IngredientsController = IngredientsController = __decorate([
    (0, common_1.Controller)('ingredients'),
    (0, common_1.UseFilters)(new http_exception_1.HttpExceptionFilter()),
    __metadata("design:paramtypes", [ingredient_service_1.IngredientService])
], IngredientsController);
//# sourceMappingURL=ingredient.controller.js.map