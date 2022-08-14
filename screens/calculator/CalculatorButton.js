import React from "react";
import ButtonGroup from "../../src/components/CalculatorButtonGroup";
import { styles } from '../../styles/calculator';

const CalculatorButton = () => {
    const buttonProps = {
        buttonContainerStyle: styles.buttonrowcontainer,
        data: [
            [
                {
                    label: "AC",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "+-",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "%",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "/",
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ],
            [
                {
                    label: "7",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "8",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: 9,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "x",
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ],
            [
                {
                    label: "4",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "5",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "6",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "-",
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ],
            [
                {
                    label: "1",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "2",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "3",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "+",
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ],
            [
                {
                    label: "0",
                    width: "50%",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: ".",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: "=",
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ]
        ]
    }

    return (
        <ButtonGroup buttonProps={buttonProps} />
    )
}

export default CalculatorButton