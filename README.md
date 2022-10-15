# App for managing your invoices
## Made with Vue 3 (Vuex), Tailwind and Firebase
<img src="https://user-images.githubusercontent.com/74458710/195989372-c66174d3-c10e-410b-86bb-6f27571313c2.png"  width="120" height="110"> <img src="https://user-images.githubusercontent.com/74458710/195989778-8b785760-0862-4d8e-a1e6-99a4211440a1.svg"  width="130" height="120"> <img src="https://user-images.githubusercontent.com/74458710/195989784-d9c65e01-1504-45dc-961c-b511f981c7f1.svg"  width="130" height="120">

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload
yarn dev

# build for production with minification
yarn build

```
To make app work you need to create firebase project and use your own config,
current is not available.
Also don't forget to rename collection in project, if you use different one.

You can do it one time in store index.js file - just change this state field

``` javascript
state: {
    FIREBASE_COLLECTION_NAME: 'invoices',
    ...
  },
```

## Here is how it looks

<img src="https://user-images.githubusercontent.com/74458710/195991354-e6f40d8e-3838-45c4-9ee6-97fa9712a81b.png"  width="800" height="440">
<img src="https://user-images.githubusercontent.com/74458710/195991349-b8cd5709-6670-45d7-a665-8b9d0ca8a538.png"  width="800" height="440">
<img src="https://user-images.githubusercontent.com/74458710/195991368-08974cba-ecf6-4f50-bbaa-ca6d2918a4ac.png"  width="800" height="440">
<img src="https://user-images.githubusercontent.com/74458710/195991369-2031b25d-5c85-4fc9-8f1c-968bb258781e.png"  width="800" height="440">
