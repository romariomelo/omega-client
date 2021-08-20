import OmegaLogo from '../assets/omega-logo.svg'
import PersonSilhouette from '../assets/person-silhouette.svg'
import ProposalBox from '../components/proposalBox'
import LargeButton from '../components/largeButton'

function Proposals(){
    return(
        <>
        <div>
            <div className="flex flex-nowrap justify-between">
                <img src={OmegaLogo} className="h-20 m-12"/>
                <div className="justify-self-end flex">
                    <img src={PersonSilhouette} className="bg-yellow-600 my-auto p-2 w-12 h-12" />
                    <p className="mr-10 border-2 border-yellow-500 border-l-0 h-12 my-auto px-2">
                        NomeDoUsuário
                    </p>
                </div>
            </div>
        </div>
        <div className="h-px w-screen bg-gray-200" />
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