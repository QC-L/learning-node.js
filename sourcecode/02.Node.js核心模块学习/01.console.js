// dir 用于打印对象
var pro = [
    {
        "name": "北京",
        "sub": [
            {"name": "东城区"},
            {"name": "西城区"},
            {"name": "崇文区"},
            {"name": "宣武区"},
            {"name": "朝阳区"},
            {"name": "海淀区"},
            {"name": "丰台区"},
            {"name": "石景山区"},
            {"name": "房山区"},
            {"name": "通州区"},
            {"name": "顺义区"},
            {"name": "昌平区"},
            {"name": "大兴区"},
            {"name": "怀柔区"},
            {"name": "平谷区"},
            {"name": "门头沟区"},
            {"name": "密云县"},
            {"name": "延庆县"},
            {"name": "其他"}
            ],
        "type": 0
    }
]
var options = {
    depth: null,
    colors: true
}
console.dir(pro, options)
// time/timeEnd
console.time('time')
for (var i = 0; i < 1000000; i++) {  }
console.timeEnd('time')
// trace
console.trace('当前栈信息')
// assert
console.assert(false, '此处有异常')
console.log('这个log不会执行')