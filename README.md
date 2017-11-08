# _Deal Finder_

#### _An Angular application that gets eBay prices with an API call, 11.09.2017_

#### By _Margaret Berry, Sarah Lindmar, David Hale, and Qudsia Ahmad_

## Setup and Installation Instructions
1. `$ git clone` [this repository](https://github.com/phuzisham/deal-finder.git)
2. `$ cd deal-finder`
3. `$ npm install`
4. `$ bower install -g` _to install bower if needed_
5. `$ bower init`
6. `$ bower install bootstrap --save`
7. _Firebase setup:_
* _Go to [firebase](https://firebase.google.com/) and login or create a free account._
* _Go to the firebase console and create a project called 'deal-finder'._
* _Click 'add firebase to your web app'._
* `$ touch src/app/api-keys.ts` _then add the following code:_`export var masterFirebaseConfig = { apiKey: "xxxx", authDomain: "xxxx.firebaseapp.com", databaseURL: "https://xxxx.firebaseio.com", storageBucket: "xxxx.appspot.com", messagingSenderId: "xxxx" };` _but replace the x's with your information._
* _Visit the Firebase console, click 'discussion-forum,' and click the database option from the lefthand side of the menu._
* _Click 'Realtime Database,' then 'Rules.' Set the value of .read and .write to 'true' and click 'publish.'_
* _'Click 'Data,' then click the three dots in the upper righthand corner. Select 'Import JSON' and navigate to 'sample-products.json' from this project._

_IMPORTANT: You may need to install [this Chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en) for the search function to work._

## User Stories
* _As a user, I want to..._
* _Search for a keyword on eBay and see a list of products with that keyword._

## Future Features
* _As a user, I want to..._
* _See price history over time._
* _Click on an image to see product details._

## Bugs
_There are no known bugs at this time._

## Angular Information
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used
* _JavaScript_
* _TypeScript_
* _Angular2_
* _Node_
* _Bower_
* _Bootstrap_
* _Firebase_
* _Jasmine and Karma_

## Support and contact details

_If you have any updates, questions, or suggestions please contact [Margaret], [Sarah], [David], or [Qudsia] or make a contribution._

[Margaret]: mailto:margaretshelaghmcgovern@gmail.com
[Sarah]: mailto:srhcrete@gmail.com
[David]: mailto:david.hale7@gmail.com
[Qudsia]: q4hmad@gmail.com

### License

MIT License

Copyright (c) 2017 Margaret Berry, Sarah Lindmar, David Hale, and Qudsia Ahmad
