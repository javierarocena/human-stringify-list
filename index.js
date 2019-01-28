"use strict";
exports.__esModule = true;
var HumanListSettings = /** @class */ (function () {
    function HumanListSettings(settings) {
        if (settings === void 0) { settings = {}; }
        this.items_name = settings.items_name || "items";
        this.item_name = settings.item_name || "item";
        this.max_available_to_count = settings["max_available_to_count"] || 7;
        this.no_items_msg = settings.no_items_msg || "No hay items";
        this.and_separator = settings.and_separator || "y";
        this.comma_separator = settings.comma_separator || ",";
    }
    return HumanListSettings;
}());
var HumanList = /** @class */ (function () {
    function HumanList(items, settings) {
        this.items = items;
        this.settings = new HumanListSettings(settings);
        return this;
    }
    HumanList.prototype.stringlyList = function (items, settings) {
        if (items === void 0) { items = this.items; }
        if (settings === void 0) { settings = this.settings; }
        if (!items.length) {
            return settings.no_items_msg;
        }
        if (items.length > settings.max_available_to_count) {
            return items.length + " " + settings.items_name;
        }
        if (items.length === 1) {
            return items[0];
        }
        if (items.length === 2) {
            return items[0] + " " + settings.and_separator + " " + items[1];
        }
        if (items.length > 2) {
            for (var i = 0; i < items.length; i++) {
                if (i < items.length - 2) {
                    items[i] += settings.comma_separator;
                }
                if (i === items.length - 2) {
                    items[i] += " " + settings.and_separator;
                }
                if (i === items.length - 1) {
                    return items.join(" ");
                }
            }
        }
    };
    return HumanList;
}());
var HumanProductList = /** @class */ (function () {
    function HumanProductList(items, settings) {
        this.product_list = [];
        this.settings = settings;
    }
    HumanProductList.prototype.stringly = function () {
        return new HumanList(this.product_list, this.settings).stringlyList();
    };
    return HumanProductList;
}());
function getHumanStringList(items, settings) {
    return new HumanList(items, settings).stringlyList();
}
exports.getHumanStringList = getHumanStringList;
function getHumanProductList(items, settings) {
    return new HumanProductList(items, settings).stringly();
}
exports.getHumanProductList = getHumanProductList;
