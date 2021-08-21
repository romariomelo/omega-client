import { useEffect, useMemo, useState } from "react"
import { useOmegaClienteContext } from "../context/OmegaClientContext"
import LargeButton from "../components/largeButton"
import Divider from "../components/divider"
import Header from "../components/header"

function FormRegistrationProposal() {
  const {
    listSubmercado,
    listFonteEnergia,
    listCargas,
    handleInput,
    inputs,
    handleCreateProposta,
  } = useOmegaClienteContext()
  const [valor, setValor] = useState(0),
    [disabled, setDisabled] = useState(true)

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

  const validateInputsValue = () => {
    const isValidDate = periodo_horas > 0
    const hasCargas = inputs.cargas.length > 0
    const hasFonte = Math.abs(inputs.fonteEnergia.valor) > 0
    const hasSubmercado = Math.abs(inputs.submercado.valor) > 0

    setDisabled(!(isValidDate && hasCargas && hasFonte && hasSubmercado))
  }

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
  useEffect(() => {
    validateInputsValue()
    calculaValorTotal(
      consumoTotal,
      periodo_horas,
      inputs.submercado,
      inputs.fonteEnergia
    )
  }, [inputs, consumoTotal, periodo_horas])

  return (
    <div className="overflow-x-hidden mb-10">
      <Header />
      <h1 className="text-center text-3xl my-6">Crie sua proposta</h1>
      <div className="w-3/4 border border-blue-900 mx-auto p-8">
        <div>
          <div className="flex justify-around">
            <div>
              <p>Data de inicio</p>
              <input
                type="date"
                min='2021-08-22'
                value={inputs.data_inicio}
                onChange={(event) => handleInput("data_inicio", "date", event)}
              />
            </div>
            <div>
              <p>Data de fim</p>
              <input
                type="date"
                value={inputs.data_fim}
                onChange={(event) => handleInput("data_fim", "date", event)}
              />
            </div>
          </div>
          <Divider />
          <div className="w-3/4 border border-blue-900 mx-auto p-8">
            <div>
              <p>Fonte de Energia</p>
              {listFonteEnergia.map((fonteEnergia) => (
                <>
                <label
                  htmlFor={fonteEnergia.descricao}
                  key={fonteEnergia.descricao}
                >
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
                </label><br /></>
              ))}
            </div>
          </div>
          <Divider />
          <div className="w-3/4 border border-blue-900 mx-auto p-8">
            <div>
              <p>Submercado</p>
              {listSubmercado.map((submercado) => (
                <>
                <label
                  htmlFor={submercado.descricao}
                  key={submercado.descricao}
                >
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
                </label>< br /></>
              ))}
            </div>
          </div>
          <Divider />
          <div className="w-3/4 border border-blue-900 mx-auto p-8">
            <div>
              <p>Cargas</p>
              {listCargas.map((carga) => (
                <>
                <label htmlFor={carga.nome_empresa} key={carga.nome_empresa}>
                  {`${carga.nome_empresa} (${carga.consumo} kWh) `}
                  <input
                    type="checkbox"
                    name={carga.nome_empresa}
                    id={carga.nome_empresa}
                    value={carga.consumo}
                    onChange={(event) =>
                      handleInput("carga", carga.nome_empresa, event)
                    }
                  />
                </label><br /></>
              ))}
            </div>
          </div>
          <Divider />
          <div className="flex justify-around">
            <div>
              <h1 className="text-2xl">Consumo total</h1>
              <br />
              <br />
              <div className="text-2xl text-center bg-gray-100 py-2 border border-blue-900">
                {consumoTotal}
              </div>
            </div>
            <div>
              <h1 className="text-2xl">Valor da Proposta Estimado</h1>
              <br />
              <br />
              <div className="text-2xl text-center bg-gray-100 py-2 border border-blue-900">
                R$ {isNaN(valor) ? 0 : valor}
              </div>
            </div>
          </div>
          <LargeButton
            content={"Criar Proposta"}
            funcOnclick={handleCreateProposta}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default FormRegistrationProposal
