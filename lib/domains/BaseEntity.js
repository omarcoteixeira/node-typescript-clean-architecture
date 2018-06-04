"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseEntity {
    toJson() {
        return JSON.parse(JSON.stringify(this));
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map