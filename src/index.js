var HumanListSettings = /** @class */ (function () {
    function HumanListSettings(settings) {
        if (settings === void 0) { settings = {}; }
        this.items_name = settings.items_name || "items";
        this.item_name = settings.item_name || "item";
        this.max_available_to_count = settings["max_available_to_count"] || 5;
        this.no_items_msg = settings.no_items_msg || "No hay items";
        this.and_separator = settings.and_separator || "y";
        this.comma_separator = settings.comma_separator || ",";
    }
    return HumanListSettings;
}());
var HumanList = /** @class */ (function () {
    function HumanList(settings) {
        this.settings = new HumanListSettings(settings);
        return this;
    }
    HumanList.prototype.stringlyList = function (items, settings) {
        if (settings === void 0) { settings = this.settings; }
        if (!items.length) {
            return settings.no_items_msg;
        }
        if (items.length > settings.max_available_to_count) {
            return settings.max_available_to_count + " " + settings.items_name;
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
    function HumanProductList() {
    }
    return HumanProductList;
}());
function getHumanStringList(items, settings) {
    return new HumanList().stringlyList(items);
}
function getHumanProductList(items, settings) {
    var list = [];
    items.map(function (item) {
        if (item.cant > 0)
            list.push(" " + item.cant + " " + (item.cant == 1 ? item.name : item.names));
    });
    return new HumanList(settings).stringlyList(list);
}
console.log(getHumanStringList(["manzana"], {
    items_name: "frutas"
}));
console.log(getHumanStringList([], {
    no_items_msg: "Ahora mismo no hay fruta"
}));
console.log(getHumanStringList(["manzana", "lechuga"]));
console.log(getHumanStringList(["manzana", "lechuga", "queso"]));
console.log(getHumanStringList(["manzana", "pimiento", "aceite", "lechuga", "queso"]));
console.log(getHumanStringList([
    "manzana",
    "pimiento",
    "aceite",
    "lechuga",
    "mermelada",
    "tomate",
    "sal",
    "vinagre",
    "maiz",
    "queso"
], {
    items_name: "frutas"
}));
console.log("------------");
console.log(getHumanProductList([
    {
        names: "Manzanas",
        name: "Manzana",
        cant: 3
    },
    {
        names: "Lechugas",
        name: "Lechuga",
        cant: 2
    },
    {
        names: "Kiwis",
        name: "Kiwi",
        cant: 7
    },
    {
        names: "Almendras",
        name: "Almendra",
        cant: 1
    }
], {
    and_separator: "&"
}));
