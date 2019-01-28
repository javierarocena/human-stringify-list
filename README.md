# human-list

An ultra lightweight Vanilla JS library that converts an array into string

![Example of Coloured Success](doc/example.gif)

## Installation

```
$ npm i human-stringify-list
```

## Uses

```js
let success = 40; // 0-100

getRgbColorAsSucess(success); //rgb(255,130.05,0)

getRgbaColorAsSucess(success, 0.2); //rgba(255,130.05,0,0.2)
```

## Use with Typescript

```js
import { getRgbColorAsSucess, getRgbaColorAsSucess } from "coloured-success";
```

## Use with Angular

```js

<h1 [ngStyle]="{ color: getRgbColorAsSucess(40) }"></h1>

```

## Examples of use

- Metrics
  ![Metrics](doc/metrics.png)

- Grades
  ![Grades](doc/grades.png)
