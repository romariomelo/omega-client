import axios from "axios"

export function UseApiRequirements() {
  const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })

  async function login(email, password) {
    const { data } = await api.post("users/login", { email, password })
    return data.access_token
  }

  async function createUser(name, email, password) {
    const { data } = await api.post("users", { name, email, password })
    return data
  }

  async function toListPropostas(token) {
    const { data } = await api.get("proposta", {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  }

  async function updadePropostas(public_id, token) {
    const { data } = await api.patch(`propostas/${public_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  }

  async function deleteProposta(public_id, token) {
    return api.delete(`propostas/${public_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async function toListCargas() {
    const { data } = await api.get("carga")
    return data
  }

  async function toListSubmercado() {
    const { data } = await api.get("submercado")
    return data
  }
  async function toListFontedeEnergia() {
    const { data } = await api.get("fonteEnergia")
    return data
  }
  async function createPropostas(dados, token) {
    const {
      data_inicio,
      data_fim,
      fonte_energia,
      submercado,
      cargas,
      consumo_total,
      contratado,
    } = dados
    const { data } = await api.post(
      "proposta",
      {
        data_inicio,
        data_fim,
        fonte_energia,
        submercado,
        cargas,
        consumo_total,
        contratado,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    return data
  }

  return {
    login,
    createUser,
    toListPropostas,
    createPropostas,
    updadePropostas,
    deleteProposta,
    toListSubmercado,
    toListFontedeEnergia,
    toListCargas,
  }
}
