import SmallButton from "./smallButton";
import ProposalElement from './proposalElement'
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

function ProposalBox(props){

    const toReal = valor => {
        return Number(valor).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
    }

    const formatData = data => {
        return format(parseISO(data), 'd MMM yy', { locale: ptBR })
    }

    const {proposta} = props;

    return(
        <div className="flex flex-wrap mx-12 my-10 justify-between border-2 border-blue-900">
            <ProposalElement content={`Início: ${formatData(proposta.data_inicio)}`} />
            <ProposalElement content={`Fim: ${formatData(proposta.data_inicio)}`} />             
            <ProposalElement content={`Consumo Total: ${proposta.consumo_total} kWh`} />          
            <ProposalElement content={`Fonte: ${proposta.fonte_energia.descricao}`} />  
            <ProposalElement content={`Submercado: ${proposta.submercado.descricao}`} />
            <ProposalElement content={`Valor: R$ ${toReal(proposta.valor_proposta)}`} />
            <ProposalElement content={`ID: ${proposta.public_id}`} />
            <ProposalElement content={`Contratada: ${proposta.contratado ? 'SIM' : 'NÃO'}`} />
            <div className="justify-self-end flex">
            {(!proposta.contratado) ?
            <>
            <SmallButton content={'Contratar'} bgColor={'bg-green-600'} />
            <SmallButton content={'Deletar'} bgColor={'bg-red-600'} />
            </> : null}
            </div>
        </div>
    )
}
export default ProposalBox