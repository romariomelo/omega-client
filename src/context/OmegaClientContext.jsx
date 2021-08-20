import { createContext, useContext, useState } from "react"
import { UseApiRequirements } from "../service/UseApiRequirements"

const OmegaClientContext = createContext()

export default OmegaClientContext

export function OmegaClientProvider({ children }) {
  const [loginToken, setLoginToken] = useState(""),
    [isToken, setIsToken] = useState(false),
    [valueProposta, setValueProposta] = (useState(0)[
      (listPospostas, setListPropostas)
    ] = useState([]))

  const {
    login,
    toListPropostas,
    deleteProposta,
    createUser,
    createPropostas,
    updadePropostas,
  } = UseApiRequirements()

  handleLogin = async (email, password) => {
    const token = await login(email, password)
    setLoginToken(token)
    setIsToken(true)
  }

  handleCreateUser = async (name, email, password) => {
    const user = await createUser(name, email, password)
    return { name: user.name, email: user.email }
  }

  handlelistingPropostas = async () => {
    const propostas = await toListPropostas(loginToken)
    setListPropostas(propostas)
  }

  handleDeleteProposta = async (public_id) => {
    await deleteProposta(public_id, loginToken)
    await handlelistingPropostas()
  }

  handleCreateProposta = async (data) => {
    const novaProposta = await createPropostas(data, loginToken)
    await handlelistingPropostas()
    return novaProposta.public_id
  }

  handleUpdateProposta = async () => {
    await updadePropostas(public_id, loginToken)
    await handlelistingPropostas()
  }

  handleLogout = () => {
    setIsToken(false)
    setLoginToken("")
  }

  const context = {
    handleLogin,
    handleCreateUser,
    handlelistingPropostas,
    listPospostas,
    handleCreateProposta,
    isToken,
    handleLogout,
  }

  return (
    <OmegaClientContext.Provider value={context}>
      {children}
    </OmegaClientContext.Provider>
  )
}

export const useOmegaClienteContext = () => {
  return useContext(OmegaClientContext)
}
