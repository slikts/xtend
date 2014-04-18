module.exports = extend

function extend() {
    var target = {}

    for (var i = 0, n = arguments.length; i < n; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}
