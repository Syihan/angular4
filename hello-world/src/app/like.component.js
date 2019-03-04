"use strict";
exports.__esModule = true;
var LikesComponent = /** @class */ (function () {
    function LikesComponent(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikesComponent.prototype.onClick = function () {
        this.likesCount += (this.isSelected) ? -1 : 1;
        this.isSelected = !this.isSelected;
    };
    return LikesComponent;
}());
exports.LikesComponent = LikesComponent;
