import ProposalBox from '../components/proposalBox'
import LargeButton from '../components/largeButton'
import Header from '../components/header'

function Proposals(){
    return(
        <>
        <Header />
        <h2 className="ml-16 mt-10 text-3xl">
        Lista das suas propostas:
        </h2>
        <ProposalBox />
        <ProposalBox />
        <LargeButton content="Criar nova proposta" fixed="fixed bottom-2 right-16" />
        </>
    )
}
export default Proposals