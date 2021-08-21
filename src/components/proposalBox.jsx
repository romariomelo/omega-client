import SmallButton from './smallButton';
import ProposalElement from './proposalElement';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useOmegaClienteContext } from '../context/OmegaClientContext';

function ProposalBox(props) {
  const { handleDeleteProposta, handleContrataProposta } = useOmegaClienteContext();
  const toReal = (valor) => {
    return Number(valor).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatData = (data) => {
    console.log(data)
    // return format(parseISO(data), 'd MMM yy', { locale: ptBR,  });
    const dt = new Date(data);
    return dt.toLocaleString('pt-BR', {timeZone: 'UTC'}).replace(' 00:00:00', '')
  };

  const { proposta } = props;

  return (
    <div className={`flex flex-wrap mx-12 my-10 justify-between border-2 ${proposta.contratado ? 'border-green-900' : 'border-blue-900'}`}>
      <ProposalElement
        content={`Início: ${formatData(proposta.data_inicio)}`}
      />
      <ProposalElement content={`Fim: ${formatData(proposta.data_fim)}`} />
      <ProposalElement
        content={`Consumo Total: ${proposta.consumo_total} kWh`}
      />
      <ProposalElement content={`Fonte: ${proposta.fonte_energia.descricao}`} />
      <ProposalElement
        content={`Submercado: ${proposta.submercado.descricao}`}
      />
      <ProposalElement
        content={`Valor: R$ ${toReal(proposta.valor_proposta)}`}
      />
      <ProposalElement content={`ID: ${proposta.public_id}`} />

      <ProposalElement
        content={`Contratada: ${proposta.contratado ? 'SIM' : 'NÃO'}`}
      />
      <div className="justify-self-end flex">
        {!proposta.contratado ? (
          <>
            <SmallButton
                public_id={proposta.public_id}
                content={'Contratar'}
                bgColor={'bg-green-600'}
                functionOnclick={handleContrataProposta}
            />
            <SmallButton
              public_id={proposta.public_id}
              content={'Deletar'}
              bgColor={'bg-red-600'}
              functionOnclick={handleDeleteProposta}
            />
          </>
        ) : null}
      </div>
    </div>
  );
}
export default ProposalBox;
