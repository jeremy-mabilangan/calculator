import { TouchableOpacity, Text } from "react-native";

const ButtonComponent = ({ buttonStyle, textStyle, label, ...res }) => {
    return (
        <TouchableOpacity
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