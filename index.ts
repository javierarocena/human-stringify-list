class HumanListSettings {
  items_name?: string;
  item_name?: string;
  max_available_to_count?: number;
  no_items_msg?: string;
  comma_separator?: string;
  and_separator?: string;

  constructor(settings: HumanListSettings = {}) {
    this.items_name = settings.items_name || "items";
    this.item_name = settings.item_name || "item";
    this.max_available_to_count = settings["max_available_to_count"] || 7;
    this.no_items_msg = settings.no_items_msg || "No hay items";
    this.and_separator = settings.and_separator || "y";
    this.comma_separator = settings.comma_separator || ",";
  }
}

class HumanList {
  settings: HumanListSettings;
  items: string[];
  constructor(items: string[], settings?: HumanListSettings) {
    this.items = items;
    this.settings = new HumanListSettings(settings);
    return this;
  }

  stringlyList(
    items: string[] = this.items,
    settings: HumanListSettings = this.settings
  ): string {
    if (!items.length) {
      return settings.no_items_msg;
    }

    if (items.length > settings.max_available_to_count) {
      return `${items.length} ${settings.items_name}`;
    }

    if (items.length === 1) {
      return items[0];
    }

    if (items.length === 2) {
      return `${items[0]} ${settings.and_separator} ${items[1]}`;
    }

    if (items.length > 2) {
      for (let i = 0; i < items.length; i++) {
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
  }
}

class HumanProductList {
  product_list: string[] = [];
  settings: HumanListSettings;
  constructor(items: Product[], settings?: HumanListSettings) {
    this.settings = settings;
  }

  stringly() {
    return new HumanList(this.product_list, this.settings).stringlyList();
  }
}

export function getHumanStringList(
  items: string[],
  settings?: HumanListSettings
): string {
  return new HumanList(items, settings).stringlyList();
}

interface Product {
  name: string;
  names?: string;
  cant: number;
}

export function getHumanProductList(
  items: Product[],
  settings?: HumanListSettings
): string {
  return new HumanProductList(items, settings).stringly();
}
