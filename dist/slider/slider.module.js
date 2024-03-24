"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlidersModule = void 0;
const common_1 = require("@nestjs/common");
const slider_service_1 = require("./slider.service");
const slider_controller_1 = require("./slider.controller");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const images_module_1 = require("../images/images.module");
const slider_entity_1 = require("../entities/slider.entity");
let SlidersModule = class SlidersModule {
};
exports.SlidersModule = SlidersModule;
exports.SlidersModule = SlidersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([slider_entity_1.Slider]),
            auth_module_1.AuthModule,
            images_module_1.ImagesModule,
        ],
        providers: [slider_service_1.SlidersService],
        controllers: [slider_controller_1.slidersController],
    })
], SlidersModule);
//# sourceMappingURL=slider.module.js.map