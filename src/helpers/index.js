import * as types from "./constants/calculator"

export const formatResult = (num) => {
    const count = getDecimalPlaces(num)
    let _num = num
    
    if (count > 0) {
        if (count > 6) {
            _num = parseFloat(num).toFixed(6)
        }
    }

    return parseFloat(_num)
}

export const getDecimalPlaces = (num) => {
    let count = 0
    const _num = typeof num === "number" ? num.toString() : num

    if (_num.includes(types.DOT)) {
        let arr = _num.split(".")
        if (arr[1].length > 0) {
            count = arr[1].length
        }
    }

    return count
}