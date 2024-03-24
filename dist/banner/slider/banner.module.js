"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannersModule = void 0;
const common_1 = require("@nestjs/common");
const banner_service_1 = require("./banner.service");
const banner_controller_1 = require("./banner.controller");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../../auth/auth.module");
const images_module_1 = require("../../images/images.module");
const banner_entity_1 = require("../../entities/banner.entity");
let BannersModule = class BannersModule {
};
exports.BannersModule = BannersModule;
exports.BannersModule = BannersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([banner_entity_1.Banner]),
            auth_module_1.AuthModule,
            images_module_1.ImagesModule,
        ],
        providers: [banner_service_1.BannersService],
        controllers: [banner_controller_1.bannersController],
    })
], BannersModule);
//# sourceMappingURL=banner.module.js.map