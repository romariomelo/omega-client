import { useOmegaClienteContext } from "../context/OmegaClientContext"

function Input(props) {
  const { handleInputLoginAndCreateUser } = useOmegaClienteContext()
  return (
    <input
      className={`m-5 p-3 border-black border-2 ${props.width} self-center`}
      placeholder={props.placeholder}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={(event) => handleInputLoginAndCreateUser(props.name, event)}
    />
  )
}
export default Input
