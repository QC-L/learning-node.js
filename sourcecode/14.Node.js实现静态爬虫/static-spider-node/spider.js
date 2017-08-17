var request = require('request')
var cheerio = require('cheerio')
var download = require('./download')
request.get('http://daily.zhihu.com/', function (error, response, body) {
    if (error) return
    var $ = cheerio.load(body)
    var imgSrcArray = []
    $('.link-button img').each(function (index, element) {
        var img = {
            imgSrc: $(element).attr('src')
        }
        imgSrcArray.push(img)
    })
    imgSrcArray.forEach(function (item, index) {
        download(item.imgSrc, 'images', index + '.jpg')
    })
})