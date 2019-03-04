"use strict";
exports.__esModule = true;
var like_component_1 = require("./app/like.component");
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app/app.module");
var environment_1 = require("./environments/environment");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var component = new like_component_1.LikesComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)["catch"](function (err) { return console.error(err); });
