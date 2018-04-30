


(function () {
    let undrln = window._ = {}

    undrln.groupBy = function (collection, key) {
        let groupedElements = {}
        if (collection.length == 0){
            return groupedElements
        }
        let index = 0,
            maxIndex = Math.max(collection.length - 1, 0)
        while (index <= maxIndex){
            let item = collection[index]
            let value = item[key]
            groupedElements[value] =
                (groupedElements[value] || [])
                .concat(item)
                index++
        }
        return groupedElements
    }

    undrln.filter = function (collection, predicate) {
        let result = []
        if(collection.length === 0){
            return result
        }
        let item,
            index = 0,
            maxIndex = Math.max(collection.length - 1, 0)
        while (index <= maxIndex){
            item = collection[index]
            if(predicate(item)){
                result.push(item)
            }
            index ++
        }
        return result
    }

    undrln.contains = function (collection, value) {
        return collection.indexOf(value) >= 0
    }

    undrln.once = function (fn, context) {
        let hasBeenCalled = false
        return function onceProxy() {
            hasBeenCalled = true
            fn.apply(context || null, arguments)
        }
    }

    undrln.debounce = function (fn, duration, context) {
        let lastCallAt = 0
        return function debounceProxy() {
            let thisCallAt = (new Date()).getTime()
            let elapsed = thisCallAt - lastCallAt
            if(lastCallAt === 0 || elapsed > duration){
                lastCallAt = thisCallAt
                return fn.apply(context || null, arguments)
            }
        }
    }

    
}())
