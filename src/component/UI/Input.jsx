export default function InputTag({labelName="empty", type="text", isError}) {
    // console.log(labelName.replaceAll(" ",""));
    return <div className="control">
        <label htmlFor={labelName} className="control-row">{labelName}</label>
        <input type={type} id={labelName} className="control-row " name={labelName.replaceAll(" ","")} required/>
        {isError && <small className="error">This input is required</small>}
    </div>
}