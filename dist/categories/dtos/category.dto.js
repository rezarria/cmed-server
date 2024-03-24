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
exports.CategoryDto = void 0;
const class_transformer_1 = require("class-transformer");
const document_dto_1 = require("../../documents/dtos/document.dto");
const new_dto_1 = require("../../news/dtos/new.dto");
class CategoryDto {
}
exports.CategoryDto = CategoryDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], CategoryDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], CategoryDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], CategoryDto.prototype, "modifiedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], CategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", new_dto_1.NewDto)
], CategoryDto.prototype, "news", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", document_dto_1.DocumentDto)
], CategoryDto.prototype, "documents", void 0);
//# sourceMappingURL=category.dto.js.map