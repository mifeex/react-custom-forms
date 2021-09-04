import React from "react"

const ButtonComponent = props => {
    const changeSendStatus = () => {
        props.onBtnClicked(true)
    }
    return (
        <>
            <button onClick={changeSendStatus} disabled={!props.isDisabled}>
                {props.btnName}
            </button>
        </>
    )
}

export default ButtonComponent