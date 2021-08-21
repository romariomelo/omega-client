function SmallButton(props) {
  return (
    <button
      className={`${props.detail} block text-white px-6 mx-3 my-2 border border-black w-32 h-10 ${props.bgColor}`}
      onClick={() => props.functionOnclick(props.public_id)}
    >
      {props.content}
    </button>
  )
}
export default SmallButton
