import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/calculator';
import CalculatorButton from './CalculatorButton';
import Input from './Input';
import { CalculatorContext } from '../../src/context/CalculatorContext';

export default function Calculator() {
  const [value, setValue] = useState("0");
  
  return (
    <CalculatorContext.Provider value={{ value, setValue }}>
      <View style={styles.container}>
          <View style={styles.inputcontainer}>
              <Input />
          </View>
          <View style={styles.buttongroupcontainer}>
            <CalculatorButton />
          </View>
      </View>
    </CalculatorContext.Provider>
  );
}
