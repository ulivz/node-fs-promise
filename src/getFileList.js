const fs = require('fs')
const path = require('path')

/**
 * 获取文件夹中的所有文件
 * @param path
 * @returns {Promise}
 */
function getFileList(dir) {
    return new Promise(function (resolve, reject) {
        fs.readdir(dir, function (err, files) {
            if (err) {
                reject(err)
            } else {
                resolve(
                    files.map(file => {
                        return path.resolve(dir, file)
                    })
                )
            }
        })
    })
}

module.exports = getFileList