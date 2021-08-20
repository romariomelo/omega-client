import { createContext, useContext, useState } from "react"
import { UseApiRequirements } from "../service/UseApiRequirements"

const OmegaClientContext = createContext()

export default OmegaClientContext

export function OmegaClientProvider({ children }) {
  const [loginToken, setLoginToken] = useState(""),
    [isToken, setIsToken] = useState(false),
    [valueProposta, setValueProposta] = useState(0),
    [listPospostas, setListPropostas] = useState([]),
    [listSubmercado, setListSubmercado] = useState([]),
    [listFonteEnergia, setListFonteEnergia] = useState([]),
    [inputsLoginCreateUser, setInputsLoginCreateUser] = useState({
      email: "",
      password: "",
      name: "",
    })

  const {
    login,
    toListPropostas,
    deleteProposta,
    createUser,
    createPropostas,
    updadePropostas,
    toListFontedeEnergia,
    toListSubmercado,
  } = UseApiRequirements()

  const handleInputLoginAndCreateUser = (placeholder, { target }) => {
    if (placeholder === "Email") {
      setInputsLoginCreateUser({
        ...inputsLoginCreateUser,
        email: target.value,
      })
    }
    if (placeholder === "Senha") {
      setInputsLoginCreateUser({
        ...inputsLoginCreateUser,
        password: target.value,
      })
    }
    if (placeholder === "Nome do usuário") {
      setInputsLoginCreateUser({
        ...inputsLoginCreateUser,
        name: target.value,
      })
    }
    console.log(inputsLoginCreateUser)
  }

  const handleLogin = async () => {
    const { email, password } = inputsLoginCreateUser
    const token = await login(email, password)
    setLoginToken(token)
    setIsToken(true)
  }

  const handleCreateUser = async (name, email, password) => {
    const user = await createUser(name, email, password)
    return { name: user.name, email: user.email }
  }

  const handlelistingPropostas = async () => {
    const propostas = await toListPropostas(loginToken)
    setListPropostas(propostas)
  }

  const handleDeleteProposta = async (public_id) => {
    await deleteProposta(public_id, loginToken)
    await handlelistingPropostas()
  }

  const handleCreateProposta = async (data) => {
    const novaProposta = await createPropostas(data, loginToken)
    await handlelistingPropostas()
    return novaProposta.public_id
  }

  const handleUpdateProposta = async (public_id) => {
    await updadePropostas(public_id, loginToken)
    await handlelistingPropostas()
  }

  const handleLogout = () => {
    setIsToken(false)
    setLoginToken("")
  }

  const handleRequestSubmercadoAndFonteEnergia = async () => {
    const submercados = await toListSubmercado()
    const fontesEnergia = await toListFontedeEnergia()
    setListSubmercado(submercados)
    setListFonteEnergia(fontesEnergia)
  }

  const context = {
    handleLogin,
    handleCreateUser,
    handlelistingPropostas,
    listPospostas,
    handleCreateProposta,
    isToken,
    handleLogout,
    handleInputLoginAndCreateUser,
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
