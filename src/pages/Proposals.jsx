import ProposalBox from '../components/proposalBox';
import LargeButton from '../components/largeButton';
import Header from '../components/header';
import { useOmegaClienteContext } from '../context/OmegaClientContext';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router';

function Proposals() {
  const history = useHistory();
  const { isToken, handlelistingPropostas, listPospostas } =
    useOmegaClienteContext();

  function unautohorized() {
    if (!isToken) {
      history.push('/');
    }
    return;
  }

  const initialize = async () => {
    await handlelistingPropostas();
  }

  useEffect(() => {
    unautohorized();
    initialize();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <h2 className="ml-16 mt-10 text-3xl">Lista das suas propostas:</h2>
      {listPospostas.map((proposta) => (
        <ProposalBox proposta={proposta} />
      ))}
      <LargeButton
        content="Criar nova proposta"
        fixed="fixed bottom-2 right-16"
      />
    </div>
  );
}
export default Proposals;
