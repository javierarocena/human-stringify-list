import { Component } from "@angular/core";

import { getRgbColorAsSucess, getRgbaColorAsSucess } from "coloured-success";
import { Options } from "ng5-slider";
import { getHumanStringList, getHumanProductList } from "human-stringify-list";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  porcent: number = 0;

  list: string[] = [
    "Cheese",
    "tomato",
    "pepperoni",
    "egg",
    "oregano",
    "olive",
    "cucumber",
    "pepper",
    "ham",
    "seafood",
    "garlic",
    "pineapple"
  ];

  filterList(list: string[], value: number) {
    let list_filtered = [];
    for (let i = 0; i < 0 + value; i++) {
      list_filtered.push(list[i]);
    }
    return list_filtered;
  }

  generateList(list: string[], value: number) {
    let list_filtered = [];
    for (let i = 0; i < 0 + value; i++) {
      list_filtered.push(list[i]);
    }
    return getHumanStringList(list_filtered, {
      no_items_msg: "No hay ingredientes"
    });
  }

  options: Options = {
    floor: 0,
    step: 1,
    ceil: this.list.length
  };
}
