import { useRef } from "react"
export default function InputTag({labelName="empty", type="text", isError}) {
    let inputValue=useRef()
    // console.log(labelName.replaceAll(" ",""));
    function handleInputVal(event){
        inputValue.current.value
    }
    return <div className="control">
        <label htmlFor={labelName} className="control-row">{labelName}</label>
        <input ref={inputValue} type={type} id={labelName} className="control-row " name={labelName.replaceAll(" ","")} onChange={handleInputVal} required/>
        {isError && <small className="error">This input is required</small>}
    </div>
}