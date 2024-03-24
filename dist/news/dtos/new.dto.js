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
exports.NewDto = void 0;
const class_transformer_1 = require("class-transformer");
const child_category_dto_1 = require("../../categories/dtos/child-category.dto");
class NewDto {
}
exports.NewDto = NewDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], NewDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], NewDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Date)
], NewDto.prototype, "modifiedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NewDto.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NewDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NewDto.prototype, "featuredImage", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], NewDto.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], NewDto.prototype, "view", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", child_category_dto_1.ChildCategoryDto)
], NewDto.prototype, "category", void 0);
//# sourceMappingURL=new.dto.js.map