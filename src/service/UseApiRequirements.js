import axios from "axios"

export function UseApiRequirements() {
  const api = axios.create({
    baseURL: "http://localhost:3333/",
  })
  return data

  async function login(email, password) {
    const { data } = await api.post("users/login", { email, password })
    return data.access_token
  }

  async function createUser(name, email, password) {
    return api.post("users", { name, email, password })
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
    const { data } = await api.delete(`propostas/${public_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return data
  }

  async function toListSubmercado() {
    const { data } = await api.get("submercado")
  }
  async function toListFontedeEnergia() {
    const { data } = await api.get("fonteEnergia")
  }
  async function createPropostas(data, token) {
    const {
      data_inicio,
      data_fim,
      fonte_energia,
      submercado,
      cargas,
      consumo_total,
      contratado,
    } = data
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
  }
}
