"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent() {
        this.text = "\n    asdflkas;jdfkasdjf;akdfjaskdfjlasdfjladjfklasjdlfkasjdflkafjdklsfjlakfjlasdjfasdfl\n  ";
    }
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-courses',
            template: "\n    {{text | summary:10}}\n  "
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;