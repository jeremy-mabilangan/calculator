import React from "react";
import ButtonGroup from "../../src/components/CalculatorButtonGroup";
import { styles } from '../../styles/calculator';
import * as types from "../../src/helpers/constants/calculator"
import ViewModel from "./ViewModel";

const CalculatorButton = () => {
    const viewModel = ViewModel()

    const buttonProps = {
        buttonContainerStyle: styles.buttonrowcontainer,
        action: (i) => { viewModel?.actionButton(i) },
        data: [
            [
                {
                    label: types.FUNC_AC,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.FUNC_POSITIVE_NEGATIVE,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.FUNC_DECIMAL,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.FUNC_DIVIDE,
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ],
            [
                {
                    label: types.NUM_7,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.NUM_8,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.NUM_9,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.FUNC_MULTIPLY,
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ],
            [
                {
                    label: types.NUM_4,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.NUM_5,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.NUM_6,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.FUNC_MINUS,
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ],
            [
                {
                    label: types.NUM_1,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.NUM_2,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.NUM_3,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.FUNC_PLUS,
                    buttonStyle: styles.rightbutton,
                    textStyle: styles.textstyle
                }
            ],
            [
                {
                    label: types.NUM_0,
                    width: "50%",
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.DOT,
                    buttonStyle: styles.leftbutton,
                    textStyle: styles.textstyle
                },
                {
                    label: types.FUNC_EQUAL,
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