var readFile = require('./readFile.js')
var writeFile = require('./writeFile.js')

/**
 * 修改文件的方法
 * @param path
 * @param handle
 * @returns {Promise.<TResult>}
 */
function changeFile(path, handle) {
    return readFile(path)
        .then(content => {
            return writeFile(path, handle(content))
        })
}

module.exports = changeFile