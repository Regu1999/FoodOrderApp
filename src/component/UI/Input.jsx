import { forwardRef, useState } from "react"
const InputTag = forwardRef(function ({ labelName = "empty", type = "text", isError, ...props }, ref) {
    // let inputValue=useRef()
    // console.log(labelName.replaceAll(" ",""));
    // function handleInputVal(event){
    //     inputValue.current.value
    // }
    // const 
    return <div className="control">
        <label htmlFor={labelName} className="control-row">{labelName}</label>
        <input ref={ref} type={type} id={labelName} className="control-row " name={labelName.replaceAll(" ", "")} {...props} required />
        {isError && <small className="error">This input is required</small>}
    </div>
})

export default InputTag