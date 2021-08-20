function LargeButton(props) {
  return (
    <button
      className={`bg-yellow-600 block mx-auto text-white px-10 py-2 mb-3 border-2 border-black active:bg-yellow-100 hover:bg-yellow-500 ${props.fixed}`}
      onClick={props.funcOnclick}
    >
      {props.content}
    </button>
  )
}
export default LargeButton
