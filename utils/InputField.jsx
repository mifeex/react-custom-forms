import React from "react";

const InputFieldComponent = props => {
    return (
        <span>
            <span>{props.name}</span>
            <input onChange={props.onChangeValue} value={props.value} 
            />
            <div>
                {props.isError && <small>{`You use symbols which is prohibited`}</small>}
            </div>
        </span>
    )
}

export default InputFieldComponent