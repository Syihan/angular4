"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ToggleStarComponent = /** @class */ (function () {
    function ToggleStarComponent() {
    }
    ToggleStarComponent.prototype.ngOnInit = function () {
    };
    ToggleStarComponent.prototype.onClick = function () {
        this.isSelected = !this.isSelected;
    };
    ToggleStarComponent = __decorate([
        core_1.Component({
            selector: 'app-toggle-star',
            templateUrl: './toggle-star.component.html',
            styleUrls: ['./toggle-star.component.css']
        })
    ], ToggleStarComponent);
    return ToggleStarComponent;
}());
exports.ToggleStarComponent = ToggleStarComponent;
