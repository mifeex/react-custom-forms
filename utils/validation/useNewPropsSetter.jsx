import React from 'react'

export const useNewPropsSetter = props => {
        let newProps = {}

        const propsPackage = {
            name: "",
            sendData: ()=>null,
            isBtnClicked: true,
            onDisableHandler: ()=>null
        }

        for(let i in propsPackage) {
            if(i in props) newProps = {...props}
            if(!(i in props)) newProps[i] = propsPackage[i]
        }
        return newProps
}