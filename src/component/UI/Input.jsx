import { forwardRef, useState } from "react"
const InputTag = forwardRef(function ({ labelName = "empty", type = "text", ...props }, ref) {
    // const [inputVal, setInputVal]=useState("");
    let isValid=true;
    // // console.log(inputVal);
    // function handleInputTag(event){
    //     if (event.target.value=="") {
    //         isValid=false;
    //     }
    //     isValid=true;
    //     setInputVal(event.target.value)
    // }
    return <div className="control">
        <label htmlFor={labelName} className="control-row">{labelName}</label>
        <input ref={ref} type={type} id={labelName}  className="control-row "  {...props} required />
        <small className="error">This input is required</small>
    </div>
})

export default InputTag