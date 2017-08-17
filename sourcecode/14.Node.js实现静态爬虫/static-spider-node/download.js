var path = require('path')
var fs = require('fs')
var request = require('request')

// 下载函数
// 参数1: 要下载内容的地址
// 参数2: 要保存的文件夹名
// 参数3: 要保存的文件名
function download(url, directory, filename) {
    // 根据当前目录生成文件夹目录
    var dir = path.join(__dirname, directory)
    // 判断文件夹是否存在
    var isDir = fs.existsSync(dir)
    // 不存在, 创建
    if (!isDir) {
        fs.mkdir(dir)
    }
    // 生成保存文件路径
    var filePath = path.join(dir, filename)
    // 下载并保存
    request(url).pipe(fs.createWriteStream(filePath))
}

module.exports = download