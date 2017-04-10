const fs = require('fs')
const path = require('path')
const emiiter = require('events').EventEmitter;
const log = require('./log');





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

/**
 * 删除文件或文件夹
 * @param {String} path
 * @param {Function} callback
 */
function del(path, callback){

	var deleteEvent = new emiiter();
	var rootDir;
	var _dirCount   = 0;
	var _fileCount  = 0;

	// 文件删除结束打印删除日志
	deleteEvent.on('end', function (){
		var title   = ` √ `
		var content = 'successfully delete old ' + _fileCount + ' files, ' + _dirCount + ' directories'
		log.inline(title, content)
		callback && callback();
	})

	/**
	 * 递归删除文件夹
	 * @param {String} path
	 */
	function _recurseDel(path){

		var files = [];

		if ( fs.existsSync(path) ) {
			files = fs.readdirSync(path);
			files.forEach(function (file){
				var curPath = path + "/" + file;
				if ( fs.statSync(curPath).isDirectory() ) {
					// recurse
					_recurseDel(curPath);
				}
				else {
					// delete file
					fs.unlinkSync(curPath);
					_fileCount++;
				}
			});

			fs.rmdirSync(path);

			if ( rootDir === path ) {
				deleteEvent.emit('end');
			}
			else {
				_dirCount++;
			}
		}
	};

	if ( !fs.existsSync(path) ) {
		log.inline('WARN', 'path not exist: ' + path);
		return callback && callback();
	}

	rootDir = path;
	_recurseDel(path);

}


module.exports = {
	getFileList,
	readFile,
	writeFile,
	changeFile,
	del
}