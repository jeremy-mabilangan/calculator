import React, { useContext } from "react";
import { CalculatorContext } from "../../src/context/CalculatorContext";
import { styles } from '../../styles/calculator';
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

const Input = () => {
    const { value } = useContext(CalculatorContext)

    return (
        <AutoSizeText
            fontSize={90}
            numberOfLines={1}
            mode={ResizeTextMode.max_lines}
            style={styles.inputstyle}>
            {value}
        </AutoSizeText>
    )
}

export default Input