import { useCallback, useContext, useEffect, useState } from "react"
import { CalculatorContext } from "../../src/context/CalculatorContext";
import { formatResult, getDecimalPlaces } from "../../src/helpers/index"
import * as types from "../../src/helpers/constants/calculator"

const ViewModel = () => {
  const { value, setValue } = useContext(CalculatorContext);
  const [previousValue, setPreviousValue] = useState("")
  const [newValue, setNewValue] = useState("")
  const [arithmeticArr, setArithmeticArr] = useState([])

  const actionButton = (num) => {
    let _num = num
    
    if (!isNaN(_num) || _num === types.DOT) {
      if (_num === "0" && value === "0") return
      if (_num === types.DOT && value === "0") _num = "0" + _num
      if (getDecimalPlaces(value) === 6 && arithmeticArr.length === 0) return
      
      if (arithmeticArr.length === 0) {
        setPreviousValue(previousValue + _num);
        setValue(previousValue + _num);
      } else {
        setNewValue(newValue + _num);
        setValue(newValue + _num);
      }
    } else {
      handleAction(_num)
    }
  }

  const handleAction = useCallback((func) => {
    if (func === types.AC)
      handleAllClear()
    else if (func === types.POSITIVE_NEGATIVE)
      handlePositiveNegative()
    else if (func === types.DECIMAL)
      handleDecimal()
    else {
      setArithmeticArr((previousArithmetic) => [...previousArithmetic, func])
    }
  }, [value])

  const handleAllClear = () => {
    setArithmeticArr([])
    setPreviousValue("");
    setNewValue("");
    setValue("0");
  }

  const handlePositiveNegative = () => {
    let res = parseFloat(value) * -1
    setPreviousValue(res)
    setValue(res)
  }

  const handleDecimal = () => {
    let res = parseFloat(value) * .01
    setPreviousValue(res)
    setValue(res)
  }

  const validateCompute = () => {
    let x = parseFloat(previousValue)
    let y = newValue === "" ? parseFloat(previousValue) : parseFloat(newValue)
    let arithmetic = arithmeticArr[0]
    handleCompute(x, y, arithmetic)
  }

  const handleCompute = (x, y, arithmetic) => {
    let res = 0

    if (arithmetic === types.DIVIDE) res = x / y
    else if (arithmetic === types.PLUS) res = x + y
    else if (arithmetic === types.MULTIPLY) res = x * y
    else if (arithmetic === types.MINUS) res = x - y

    setArithmeticArr(
      arithmeticArr[1] === types.EQUAL
        ? []
        : [arithmeticArr[1]]
    )
    setPreviousValue(formatResult(res))
    setNewValue("")
    setValue(formatResult(res))
  }

  useEffect(() => {
    if (arithmeticArr.length === 2) {
      validateCompute()
    }
  }, [arithmeticArr])

  return {
    actionButton
  }
}

export default ViewModel