import { TouchableOpacity, Text } from "react-native";

const ButtonComponent = ({ buttonStyle, textStyle, action, label, ...res }) => {
    return (
        <TouchableOpacity
            onPress={() => { action(label) }}
            style={buttonStyle}
            {...res}>
            <Text
                style={textStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent