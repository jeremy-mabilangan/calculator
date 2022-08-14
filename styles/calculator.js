import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
    inputcontainer: {
        height: "25%",
        width: "100%",
        backgroundColor: "#262626",
        padding: 10
    },
    buttongroupcontainer: {
        height: "75%",
        width: "100%",
        backgroundColor: "white"
    },
    buttonrowcontainer: {
        display: "flex",
        flexDirection: "row",
        height: "20%",
        width: "100%",
    },
    rightbutton: {
        width: "25%",
        height: "100%",
        backgroundColor: "#ffa31a",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    },
    leftbutton: {
        width: "25%",
        height: "100%",
        backgroundColor: "#f2f2f2",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
    },
    textstyle: {
        fontSize: 35,
        fontWeight: "300"
    },
    inputstyle: {
        fontSize: 70,
        fontWeight: "300",
        color: "white",
        textAlign: "right",
        width: "100%",
        marginTop: "10%"
    }
});