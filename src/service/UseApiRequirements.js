import axios from "axios"

export function UseApiRequirements() {
  const api = axios.create({
    baseURL: "http://localhost:3333/",
  })

  async function login(email, password) {
    const { data } = await api.get("users/login", { email, password })
    return data
  }

  async function createUser(name, email, password) {
    return api.post("users", { name, email, password })
  }

  async function toListPropostas(token) {
    return api.get("proposta", {
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async function updadePropostas(public_id, token) {
    return api.patch(`propostas/${public_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  async function deleteProposta(public_id, token) {
    return api.delete(`propostas/${public_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
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
    return api.post(
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
  }

  return {
    login,
    createUser,
    toListPropostas,
    createPropostas,
    updadePropostas,
    deleteProposta,
  }
}
