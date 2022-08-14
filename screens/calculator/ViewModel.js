import { useCallback, useContext, useEffect, useState, useRef } from "react"
import { CalculatorContext } from "../../src/context/CalculatorContext";
import * as types from "../../src/helpers/constants/calculator"

const ViewModel = () => {
  const { value, setValue } = useContext(CalculatorContext);
  const [previousValue, setPreviousValue] = useState("")
  const [newValue, setNewValue] = useState("")
  const [arithmeticArr, setArithmeticArr] = useState([])

  const actionButton = (num) => {
    let data = num
    if (!isNaN(data) || data === types.DOT) {
      if (data === "0" && value === "0") return
      if (data === types.DOT && value === "0") data = "0" + data
      if (arithmeticArr.length === 0) {
        setPreviousValue(previousValue + data);
        setValue(previousValue + data);
      } else {
        setNewValue(newValue + data);
        setValue(newValue + data);
      }
    } else {
      handleAction(data)
    }
  }

  const handleAction = useCallback((func) => {
    if (func === types.FUNC_AC)
      handleAllClear()
    else if (func === types.FUNC_POSITIVE_NEGATIVE)
      handlePositiveNegative()
    else if (func === types.FUNC_DECIMAL)
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

    if (arithmetic === types.FUNC_DIVIDE) res = x / y
    else if (arithmetic === types.FUNC_PLUS) res = x + y
    else if (arithmetic === types.FUNC_MULTIPLY) res = x * y
    else if (arithmetic === types.FUNC_MINUS) res = x - y

    setArithmeticArr(
      arithmeticArr[1] === types.FUNC_EQUAL
        ? []
        : [arithmeticArr[1]]
    )
    setPreviousValue(res)
    setNewValue("")
    setValue(res)
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