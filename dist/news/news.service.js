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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const new_entity_1 = require("../entities/new.entity");
const typeorm_2 = require("typeorm");
const categories_service_1 = require("../categories/categories.service");
const images_service_1 = require("../images/images.service");
const utils_1 = require("../utils");
let NewsService = class NewsService {
    constructor(repo, imagesService, categoriesService) {
        this.repo = repo;
        this.imagesService = imagesService;
        this.categoriesService = categoriesService;
    }
    async findAll({ title, description, category, page = '1', perPage = '10', sortBy = 'id', order = 'DESC', }) {
        const validPage = parseInt(page) || 1;
        const validPerPage = parseInt(perPage) || 10;
        const validCategory = parseInt(category) || 0;
        return await this.repo.find({
            relations: {
                category: true,
                createdBy: true,
                modifiedBy: true,
            },
            where: {
                title: (0, typeorm_2.Like)(`%${title || ''}%`),
                description: (0, typeorm_2.Like)(`%${description || ''}%`),
                ...(validCategory ? { category: { id: validCategory } } : {}),
            },
            order: {
                [sortBy]: order.toUpperCase(),
            },
            skip: (validPage - 1) * validPerPage,
            take: validPerPage,
        });
    }
    async countAll({ title, description, category, }) {
        const validCategory = parseInt(category) || 0;
        return await this.repo.count({
            where: {
                title: (0, typeorm_2.Like)(`%${title || ''}%`),
                description: (0, typeorm_2.Like)(`%${description || ''}%`),
                ...(validCategory ? { category: { id: validCategory } } : {}),
            },
        });
    }
    async findOne(id) {
        return await this.repo.findOne({
            relations: {
                category: true,
                createdBy: true,
                modifiedBy: true,
            },
            where: { id },
        });
    }
    async create(newItem, createdUser) {
        const { title, description, featuredImage, content, categoryId } = newItem;
        const category = await this.categoriesService.findOne(categoryId);
        if (!category) {
            throw new common_1.NotFoundException('Category not found');
        }
        const item = this.repo.create({
            title,
            description,
            featuredImage: await (0, utils_1.toWebp)(featuredImage),
            content,
            category,
            createdBy: createdUser,
        });
        return await this.repo.save(item);
    }
    async update(id, updateNew, modifiedUser) {
        const item = await this.repo.findOneBy({ id });
        if (!item) {
            throw new common_1.NotFoundException('Not found');
        }
        const { categoryId, featuredImage, ...rest } = updateNew;
        if (categoryId) {
            const category = await this.categoriesService.findOne(categoryId);
            if (!category) {
                throw new common_1.NotFoundException('Category not found');
            }
            item.category = category;
        }
        Object.assign(item, rest);
        item.modifiedBy = modifiedUser;
        if (featuredImage) {
            item.featuredImage = await (0, utils_1.toWebp)(featuredImage);
        }
        return this.repo.save(item);
    }
    async delete(id) {
        const item = await this.repo.findOneBy({ id });
        if (!item) {
            throw new common_1.NotFoundException('Not found');
        }
        await this.repo.remove(item);
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(new_entity_1.New)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        images_service_1.ImagesService,
        categories_service_1.CategoriesService])
], NewsService);
//# sourceMappingURL=news.service.js.map