import React from 'react'
import InputFieldComponent from "./hidden/InputFieldComponent"
import ButtonComponent from "./hidden/ButtonComponent"
import style from "./style/style.module.css"

const FormCreator = props => {
    const [isDisabled, onDisable] = React.useState(true)
    const [isBtnClicked, onClicked] = React.useState(false)
    const valueArray = []

    const sendData = (data) => {
        if(data !== "") valueArray.push(data)
// SEND ARRAY OF VALUES
        if(valueArray.length === 1 && data !== "") return props.valueHandler(data)
        if(data !== "" && props.name.length === 0 && valueArray.length === 0) return props.valueHandler(valueArray)
        if(data !== "" && props.name.length === valueArray.length) return props.valueHandler(valueArray)

        onBtnClicked(false)
    }

// обусловленно тем, что React ругается на отсутствие "!props"
    const onDisableHandler = (value) => {
        onDisable(!value)
    }

    const onBtnClicked = (value) => {
        onClicked(value)
    }
// debugger
    return (
        <div className={style.inlineForm}>
            {props.name.map(e => {
            return <InputFieldComponent
                name={e}
                sendData={sendData}
                onDisableHandler={onDisableHandler}
                isBtnClicked={isBtnClicked}
                key={e}
            />
            })}
            <ButtonComponent
                onDisableHandler={onDisableHandler}
                btnName={props.btnName}
                isDisabled={isDisabled}
                onBtnClicked={onBtnClicked}
            />
        </div>
    )
}

export default FormCreator