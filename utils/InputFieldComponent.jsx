import React from "react"
import InputField from "./InputField"

const InputFieldComponent = props => {
    const [value, changeValue] = React.useState("")
    const [isError, onErrorHandle] = React.useState(false)
// ERROR HANDLERS
    const onChangeValue = newValue => { // на каждое нажатие проверям значение
        onValidate(newValue.target.value)
    } // 1

    const onValidate = (data) => { // проверяем на наличие скриптов и даем инфу наверх
        isQute(data)
             ? errorHandles(true)
             : 
             changeValue(data)
             errorHandles(false)
    } // 2

    const isQute = value => { // включает ли строка какие-то js скрипты
        if (value.includes("'") || 
            value.includes("http://") || 
            value.includes("javascript:void") || 
            value.includes("javascript(")) return true;
        return false
    } // 3

    const errorHandles = (value=false) => { // отправляем наверх состояния ошибок
        onErrorHandle(value)
        props.onDisableHandler(value)
    } // 3

// SEND DATA TO PARENTS
    React.useEffect(() => { // если кликнта кнопка отдаем значения
        const sendValue = () => {
            changeValue("")
        }
        sendValue()
    }, [props.isBtnClicked])

    React.useEffect(() => {
        if(props.isBtnClicked && !isError) props.sendData(value)
    })

    return (
        <>
            <InputField
                value={value}
                isError={isError}
                onChangeValue={onChangeValue} 
                name={props.name}
            />
        </>
    )
}

export default InputFieldComponent