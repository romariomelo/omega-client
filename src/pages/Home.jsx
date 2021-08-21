import React from 'react';
import SolarEnergyImage from '../assets/solar-energy-image.svg';
import LargeButton from '../components/largeButton';
import { useOmegaClienteContext } from '../context/OmegaClientContext';
import CreateUserModal from './Home/Components/CreateUserModal';

function Home() {
  const { handleLogin, handleInput } =
    useOmegaClienteContext();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);
  const [modalOpened, setModalOpened] = React.useState(false);

  const validateEmail = (email) =>
    /[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i.test(email);

  const validatePassword = (password) => {
    const minLengthPass = 8;
    return password.length >= minLengthPass;
  };

  const validateInputsValue = React.useCallback(() => {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    setDisabled(!(emailValidation && passwordValidation));
  }, [email, password]);

  React.useEffect(() => {
    validateInputsValue();
  }, [email, password, validateInputsValue]);
  return (
    <div className="flex h-screen w-screen min-h-screen">
      <div className="bg-blue-500 w-2/5 h-full min-h-screen">
        <h1 className="text-white text-center text-4xl mx-10 mt-16 mb-12 font-semibold">
          Gerencie suas propostas de um jeito simplês e fácil
        </h1>
        <img className="mx-auto w-2/4 h-2/4" src={SolarEnergyImage} alt="Energia Solar" />
        <h3 className="text-white text-center text-2xl mt-12 font-medium">
          Deixa que a Omega simplifica sua vida
        </h3>
      </div>
      <div className="h-screen w-3/5">
        <h1 className="text-center text-5xl text-blue-900 mt-24">Omega</h1>
        <h2 className="text-center w-52 mx-auto mt-4 text-4xl pb-2.5 bg-yellow-600 text-white">
          propostas
        </h2>
        <div className="flex mx-auto mt-16 flex-col">
          <input
            placeholder="E-mail"
            className="`m-5 p-3 border-black border-2 self-center `width={'w-80'}"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              handleInput('email', 'email', e);
            }}
          />
          <input
            placeholder="Senha"
            className="m-5 p-3 border-black border-2 self-center width={'w-80'}"
            name="password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
              handleInput('password', 'password', e);
            }}
          />
        </div>
        <LargeButton
          content={'Entrar'}
          funcOnclick={handleLogin}
          disabled={disabled}
        />
        <h4 className="text-center text-2x1">Ainda não é membro?</h4>
        <h4
          className="text-center text-yellow-600 font-bold text-2x1 cursor-pointer"
          onClick={() => setModalOpened(true)}
        >
          Cadastre-se
        </h4>
      </div>


      {modalOpened ? (
        <CreateUserModal setModalOpened={setModalOpened} />
      ) : null}
    </div>
  );
}
export default Home;
