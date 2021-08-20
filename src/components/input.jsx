import { useOmegaClienteContext } from "../context/OmegaClientContext"

function Input(props) {
  const { handleInputLoginAndCreateUser } = useOmegaClienteContext()
  return (
    <input
      className="m-5 p-3 border-black border-2 w-80 self-center"
      placeholder={props.placeholder}
      onChange={(event) =>
        handleInputLoginAndCreateUser(props.placeholder, event)
      }
    />
  )
}
export default Input
