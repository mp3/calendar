[![npm version](https://badge.fury.io/js/%40itabashi%2Fcalendar.svg)](https://badge.fury.io/js/%40itabashi%2Fcalendar)

## Installation

```
yarn add @itabashi/calendar
```

## Usage

```
import calendar from '@itabashi/calendar'
const cal = calendar(2018)(5)

/* result: week array of 2018.5
[
  [ 0, 0, 1, 2, 3, 4, 5 ],
  [ 6, 7, 8, 9, 10, 11, 12 ],
  [ 13, 14, 15, 16, 17, 18, 19 ],
  [ 20, 21, 22, 23, 24, 25, 26 ],
  [ 27, 28, 29, 30, 31, 0, 0 ]
]
*/

// this function is curried, so you can do like this
const 2018calendar = calendar(2018)
const 201805calendar = 2018calendar(5)
```
