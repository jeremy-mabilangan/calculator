import React from 'react';
import { View } from 'react-native';
import { styles } from '../../styles/calculator';
import CalculatorButton from './CalculatorButton';
import Input from './Input';

export default function Calculator() {
  return (
    <View style={styles.container}>
        <View style={styles.inputcontainer}>
          <Input />
        </View>
        <View style={styles.buttongroupcontainer}>
          <CalculatorButton />
        </View>
    </View>
  );
}
