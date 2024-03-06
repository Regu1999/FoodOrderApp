const InputTag = function ({ labelName = "empty", type = "text", ...props }) {
    return <div className="control">
        <label htmlFor={labelName} className="control-row">{labelName}</label>
        <input type={type} id={labelName}  className="control-row "  {...props} required />
        <small className="error">This input is required</small>
    </div>
}

export default InputTag