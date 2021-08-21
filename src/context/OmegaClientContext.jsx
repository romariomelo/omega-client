import { createContext, useContext, useState } from "react"
import { UseApiRequirements } from "../service/UseApiRequirements"
import {useHistory} from 'react-router-dom'

const OmegaClientContext = createContext()

export default OmegaClientContext

export function OmegaClientProvider({ children }) {
  const history = useHistory();
  const [loginToken, setLoginToken] = useState(""),
    [isToken, setIsToken] = useState(false),
    [valueProposta, setValueProposta] = useState(0),
    [listPospostas, setListPropostas] = useState([]),
    [listSubmercado, setListSubmercado] = useState([]),
    [listFonteEnergia, setListFonteEnergia] = useState([]),
    [inputs, setInputs] = useState({
      email: "",
      password: "",
      name: "",
      cargas: [],
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

  const handleInputLoginAndCreateUser = (input, { target }) => {
    setInputs({
      ...inputs,
      [input]: target.value,
    })
  }

  const handleLogin = async () => {
    const { email, password } = inputs
    const token = await login(email, password)
    setLoginToken(token)
    setIsToken(true)
    history.push('/propostas')
  }

  const handleCreateUser = async () => {
    const {name, email, password} = inputs
    const {access_token} = await createUser(name, email, password)
    setLoginToken(access_token)
    setIsToken(true)
    history.push('/propostas')
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
