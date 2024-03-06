import { forwardRef } from "react"
const InputTag = forwardRef(function ({ labelName = "empty", type = "text", ...props }, ref) {
    return <div className="control">
        <label htmlFor={labelName} className="control-row">{labelName}</label>
        <input ref={ref} type={type} id={labelName}  className="control-row "  {...props} required />
        <small className="error">This input is required</small>
    </div>
})

export default InputTag