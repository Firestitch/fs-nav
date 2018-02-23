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
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var router_1 = require("@angular/router");
var FsNavTitleComponent = (function () {
    function FsNavTitleComponent(stack, router) {
        this.stack = stack;
        this.router = router;
    }
    FsNavTitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function () {
            _this.activeRouteInfo = _this.stack.getActiveRouteInfo();
        });
    };
    FsNavTitleComponent = __decorate([
        core_1.Component({
            selector: '[fsNavTitle]',
            template: '{{ activeRouteInfo?.title }}'
        }),
        __metadata("design:paramtypes", [services_1.FsNavRouteHandleService, router_1.Router])
    ], FsNavTitleComponent);
    return FsNavTitleComponent;
}());
exports.FsNavTitleComponent = FsNavTitleComponent;
//# sourceMappingURL=nav-title.component.js.map