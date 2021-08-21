import { useEffect, useMemo, useState } from "react"
import { useOmegaClienteContext } from "../context/OmegaClientContext"

function FormRegistrationProposal() {
  const { listSubmercado, listFonteEnergia, listCargas, handleInput, inputs } =
    useOmegaClienteContext()
  const [valor, setValor] = useState(0)

  const VALOR_KWH = 10

  const calculaConsumoTotal = (cargas) => {
    return cargas.reduce((acc, carga) => {
      return acc + Number(carga.consumo)
    }, 0)
  }

  const periodoEmHoras = (data_inicio, data_fim) => {
    const inicio = new Date(data_inicio)
    const fim = new Date(data_fim)
    const timediff = fim.getTime() - inicio.getTime()
    return Math.ceil(timediff / (1000 * 60 * 60)) // MILISEGUNDOS * SEGUNDOS * MINUTOS
  }
  const consumoTotal = useMemo(
    () => calculaConsumoTotal(inputs.cargas),
    [inputs.cargas]
  )
  const periodo_horas = useMemo(
    () => periodoEmHoras(inputs.data_inicio, inputs.data_fim),
    [inputs.data_inicio, inputs.data_fim]
  )

  useEffect(() => {
    calculaValorTotal(
      consumoTotal,
      periodo_horas,
      inputs.submercado,
      inputs.fonteEnergia
    )
  }, [inputs, consumoTotal, periodo_horas])
  const calculaValorTotal = (
    consumo_total,
    periodo_horas,
    submercado,
    fonte_energia
  ) => {
    const valor =
      consumo_total *
      periodo_horas *
      (VALOR_KWH + Number(submercado.valor) + Number(fonte_energia.valor))
    setValor(Math.round(valor).toFixed(2))
  }
  return (
    <>
      <div>
        <span>
          <p>Data de inicio</p>
          <input
            type="date"
            onChange={(event) => handleInput("data_inicio", "date", event)}
          />
        </span>
        <span>
          <p>Data de fim</p>
          <input
            type="date"
            onChange={(event) => handleInput("data_fim", "date", event)}
          />
        </span>
      </div>
      <div>
        <p>Fonte de Energia</p>
        {listFonteEnergia.map((fonteEnergia) => (
          <label htmlFor={fonteEnergia.descricao} key={fonteEnergia.descricao}>
            {fonteEnergia.descricao}
            <input
              type="radio"
              name="fonteEnergia"
              id={fonteEnergia.descricao}
              value={fonteEnergia.valor}
              onChange={(event) =>
                handleInput("fonteEnergia", fonteEnergia.descricao, event)
              }
            />
          </label>
        ))}
      </div>
      <div>
        <p>Submercado</p>
        {listSubmercado.map((submercado) => (
          <label htmlFor={submercado.descricao} key={submercado.descricao}>
            {submercado.descricao}
            <input
              type="radio"
              name="submercado"
              id={submercado.descricao}
              value={submercado.valor}
              onChange={(event) =>
                handleInput("submercado", submercado.descricao, event)
              }
            />
          </label>
        ))}
      </div>
      <div>
        <p>Cargas</p>
        {listCargas.map((carga) => (
          <label htmlFor={carga.nome_empresa} key={carga.nome_empresa}>
            {carga.nome_empresa}
            <input
              type="checkbox"
              name={carga.nome_empresa}
              id={carga.nome_empresa}
              value={carga.consumo}
              onChange={(event) =>
                handleInput("carga", carga.nome_empresa, event)
              }
            />
          </label>
        ))}
      </div>
      <div>Consumo total: {consumoTotal}</div>
      <div>Valor estimado proposta: R$ {valor || 0}</div>
    </>
  )
}

export default FormRegistrationProposal
