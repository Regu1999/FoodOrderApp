import PopUpBtn from "./PopUpBtn"
export default function Notification({status,children}){
    return <div>
        <h2>{status}</h2>
        {children}
        <PopUpBtn />
    </div>
}