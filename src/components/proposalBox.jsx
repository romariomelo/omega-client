import SmallButton from "./smallButton";
import ProposalElement from './proposalElement'

function ProposalBox(props){
    return(
        <div className="flex flex-wrap mx-12 my-10 justify-between border-2 border-blue-900">
            <ProposalElement content={"Inicio: " + props.inicio} />
            <ProposalElement content={"Fim: " + props.fim} />             
            <ProposalElement content={"Consumo Total: " + props.consumoTotal} />          
            <ProposalElement content={"Fonte: " + props.fonte} />  
            <ProposalElement content={"Submercado: " + props.submercado} />
            <ProposalElement content={"Valor: R$" + props.valor} />
            <ProposalElement content={"ID: " + props.id} />
            <SmallButton content={'Editar'} bgColor={'bg-yellow-600'} />
            <SmallButton content={'Contratar'} bgColor={'bg-green-600'} />
            <SmallButton content={'Deletar'} bgColor={'bg-red-600'} />
        </div>
    )
}
export default ProposalBox