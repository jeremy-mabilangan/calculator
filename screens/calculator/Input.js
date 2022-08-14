import React, { useContext } from "react";
import { CalculatorContext } from "../../src/context/CalculatorContext";
import { Text } from "react-native"
import { styles } from '../../styles/calculator';

const Input = () => {
    const { value } = useContext(CalculatorContext)
    
    return (
        <Text style={styles.inputstyle}>{value}</Text>
    )
}

export default Input