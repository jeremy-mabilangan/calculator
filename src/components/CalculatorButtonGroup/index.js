import React from "react";
import Button from "../Button";
import { View } from "react-native"
import { styles } from "./styles";

const ButtonGroup = (props) => {
    const { buttonProps } = props
    return (
        <View style={styles.container}>
            {buttonProps?.data?.map(item => {
                return (
                    <View
                        style={buttonProps?.buttonContainerStyle}
                        key={Math.random()}>
                        {item?.map(i => {
                            return (
                                <Button label={i.label}
                                    buttonStyle={{...i.buttonStyle, width: i.width ? i.width : i.buttonStyle.width}}
                                    textStyle={i.textStyle}
                                    key={i.label} />
                            )
                        })}
                    </View>
                )
            })}
        </View>
    )
}

export default ButtonGroup