import ProposalBox from '../components/proposalBox'
import LargeButton from '../components/largeButton'
import Header from '../components/header'

function Proposals(){
    return(
        <div className="overflow-x-hidden">
        <Header />
        <h2 className="ml-16 mt-10 text-3xl">
        Lista das suas propostas:
        </h2>
        <ProposalBox />
        <ProposalBox />
        <LargeButton content="Criar nova proposta" fixed="fixed bottom-2 right-16" />
        </div>
    )
}
export default Proposals