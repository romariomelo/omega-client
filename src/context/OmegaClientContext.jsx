import { createContext, useContext, useState, useEffect } from "react"
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
    [listCargas, setListCargas] = useState([]),
    [inputs, setInputs] = useState({
      email: "",
      password: "",
      name: "",
      cargas: [],
      fonteEnergia: {
        descricao: "",
        valor: 0,
      },
      submercado: {
        descricao: "",
        valor: 0,
      },
      data_inicio: "",
      data_fim: "",
    })
  useEffect(() => {
    handleRequestSubmercadoFonteEnergiaCargas()
  }, [])

  const {
    toListCargas,
    login,
    toListPropostas,
    deleteProposta,
    createUser,
    createPropostas,
    updadePropostas,
    toListFontedeEnergia,
    toListSubmercado,
  } = UseApiRequirements()

  const handleInput = (input, name, { target }) => {
    const { cargas } = inputs
    if (input === "carga" && !target.checked) {
      const cargaIndex = cargas.findIndex(
        (carga) => carga.nome_empresa === name
      )
      cargas.splice(cargaIndex, 1)
    }
    if (input == "carga" && target.checked) {
      setInputs({
        ...inputs,
        cargas: [
          ...inputs.cargas,
          { ["nome_empresa"]: name, ["consumo"]: target.value },
        ],
      })
    }
    if (input == "fonteEnergia" && target.checked) {
      setInputs({
        ...inputs,
        ["fonteEnergia"]: { ["descricao"]: name, ["valor"]: target.value },
      })
    }
    if (input == "submercado" && target.checked) {
      setInputs({
        ...inputs,
        ["submercado"]: { ["descricao"]: name, ["valor"]: target.value },
      })
    }
    if (input != "carga" && input != "fonteEnergia" && input != "submercado") {
      setInputs({
        ...inputs,
        [input]: target.value,
      })
    }
    console.log({ input, name, checked: target.checked })
    console.log(inputs)
  }

  const handleLogin = async () => {
    const { email, password } = inputs
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

  const handleRequestSubmercadoFonteEnergiaCargas = async () => {
    const submercados = await toListSubmercado()
    const fontesEnergia = await toListFontedeEnergia()
    const cargas = await toListCargas()
    setListSubmercado(submercados)
    setListFonteEnergia(fontesEnergia)
    setListCargas(cargas)
  }

  const context = {
    handleLogin,
    handleCreateUser,
    handlelistingPropostas,
    listPospostas,
    handleCreateProposta,
    isToken,
    handleLogout,
    handleInput,
    listSubmercado,
    listFonteEnergia,
    listCargas,
    inputs,
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
