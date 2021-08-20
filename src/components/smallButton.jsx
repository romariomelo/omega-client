function SmallButton(props){

    return(
        <button className={`block text-white px-6 mx-6 my-2 border border-black w-32 h-10 ${props.bgColor}`} >
            {props.content}
        </button>
    )
}
export default SmallButton