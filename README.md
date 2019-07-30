# node-fs-promise

[![Greenkeeper badge](https://badges.greenkeeper.io/ulivz/node-fs-promise.svg)](https://greenkeeper.io/)

Extension for fs module of node.js

## API

### getFileList(path)
Get File List

- `path<String>`
- `return<Promis(Array)>`

### readFile(path)

- `path<String>`
- `return<Promise(String)>`


### writeFile(path)

- `path<String>`
- `return<Promise(String)>`

### del(path)

- `path<String>`
- `return<Promise(String)>`


### changeFile(path, handle)

- `path<String>`
- `handle<Function(String)>`
- `return<Promise(String)>`


