function Input(props){
        return(
            <>
            <input className={`m-5 p-3 border-black border-2 ${props.width} self-center`} placeholder={props.placeholder} type={props.type} name={props.name}/> {props.content}
            </>
        )
}
export default Input
