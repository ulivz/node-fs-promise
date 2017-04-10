const fs = require('fs')

/**
 * 写文件
 * @param filePath
 * @param content
 * @returns {Promise}
 */
function writeFile(filePath, content) {
    return new Promise((resolve, reject) => {
        let writer = fs.createWriteStream(filePath, 'utf-8')
        writer.write(content)
        writer.end('')
        writer.on('finish', () => {
            resolve()
        })
        writer.on('error', () => {
            reject('Error')
        })
    })
}

module.exports = writeFile