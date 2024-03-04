export default function Button({children,styleClass="button",...props}){
    return <button className={`${styleClass}`} {...props}>
        {children}
    </button>
}