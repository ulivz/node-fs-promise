const fs = require('fs')

/**
 * 读文件
 * @param path
 * @returns {Promise}
 */
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        var reader = fs.createReadStream(filePath, 'utf-8')
        let _content = ''
        reader.on('data', chunk => _content += chunk)
        reader.on('end', () => {
            resolve(_content)
        })
        reader.on('error', (err) => {
            reject(err)
        })
    })
}

module.exports = readFile