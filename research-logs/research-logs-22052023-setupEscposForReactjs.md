
[Back to Research Logs](https://github.com/denitiawan/research-react-escpos/tree/main/research-logs)

|Date|Assign|
|--|--|
|22-mei-2023|[Deni Setiawan](https://github.com/denitiawan)|
# Issue I'm `fs` modules when using escpos librarry

## Overviews 
- [Requirement](#requirements)
- [Librarries](#librarries)
- [Issue](#issue)


## Requirements
```
-- Node ---------------
node version : v16.14.2 
npm version  : 8.5.0

-- React ------------
react : ^18.2.0
```


## Librarries
```
npm i escpos@3.0.0-alpha.6
npm i escpos-usb@3.0.0-alpha.4
npm i usb@1.9.2

npm i fs@^2.0.0
npm i assert@2.0.0
npm i https-browserify@1.0.0
npm i os@0.1.2
npm i os-browserify@0.3.0
npm i react-app-rewired@2.1.9
npm i stream-browserify@3.0.0
npm i stream-http@3.2.0
```

## issue
```
I'm `fs` modules
PrinterThermalService.js:75 ReferenceError: require is not defined
    at ./node_modules/node-gyp-build/node-gyp-build.js (node-gyp-build.js:6:1)
    at options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:24:1)
    at fn (hot module replacement:62:1)
    at ./node_modules/node-gyp-build/index.js (index.js:4:1)
    at options.factory (react refresh:6:1)
    at __webpack_require__ (bootstrap:24:1)
    at fn (hot module replacement:62:1)
    at ./node_modules/usb/usb.js (usb.js:1:1)
    at options.factory (react refresh:6:1)
```
#### reference
- https://github.com/diegomura/react-pdf/issues/1670
- https://github.com/facebook/create-react-app/issues/11756#issuecomment-1003370942
