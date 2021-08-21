import React from 'react';
import Input from '../../../components/input';
import OmegaLogo from '../../../assets/omega-logo.svg';
import { useOmegaClienteContext } from '../../../context/OmegaClientContext';
import LargeButton from '../../../components/largeButton';

const CreateUserModal = ({ setModalOpened }) => {
  const { handleCreateUser, handleInputLoginAndCreateUser } =
    useOmegaClienteContext();

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [disabled, setDisabled] = React.useState(true);

  const validateName = (name, path) => {
    const minLengthName = 12;
    const verifyLength = name.length >= minLengthName;
    const verifyCharacter = (/^[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/i).test(name);
    if (path === '/register') return verifyLength && verifyCharacter;
    return true;
  };
  
  const validateEmail = (email) => (/[A-Z0-9]{1,}@[A-Z0-9]{2,}\.[A-Z0-9]{2,}/i)
    .test(email);
  
  const validatePassword = (password) => {
    const minLengthPass = 8;
    return password.length >= minLengthPass;
  };

  const validateInputsValue = React.useCallback(() => {
    const emailValidation = validateEmail(email);
    const nameValidation = validateName(name, '/');
    const passwordValidation = validatePassword(password);

    setDisabled(!(nameValidation && emailValidation && passwordValidation));
  }, [email, password, name]);

  React.useEffect(() => {
    validateInputsValue();
  }, [email, password, name, validateInputsValue]);


  return (
    <>
      <div
        className={`absolute w-1/3 h-3/4 bg-gray-100 m-auto inset-0 border border-black`}
        style={{ zIndex: 2 }}
      >
        <div
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={() => setModalOpened(false)}
        >
          X
        </div>
        <img src={OmegaLogo} className="h-12 m-4" alt="Logo da Omega Energia" />
        <div className="flex flex-col">
          <input
            placeholder="Nome do usuário"
            className="`m-5 p-3 border-black border-2 self-center `width={'w-80'}"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
              handleInputLoginAndCreateUser('name', e);
            }}
          />
          <br />
          <input
            placeholder="E-mail"
            className="`m-5 p-3 border-black border-2 self-center `width={'w-80'}"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputLoginAndCreateUser('email', e);
            }}
          />
          <br />
          <input
            placeholder="Senha"
            className="`m-5 p-3 border-black border-2 self-center `width={'w-80'}"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputLoginAndCreateUser('password', e);
            }}
          />
          {/* <Input placeholder={'Nome de Usuário'} name={'name'} /> */}
          {/* <Input placeholder={'Email'} name={'email'} /> */}
          {/* <Input placeholder={'Senha'} name={'password'} type="password" /> */}
          <br />
          <LargeButton
            content={'Cadastrar-se'}
            funcOnclick={handleCreateUser}
            disabled={disabled}
          />
          {/* <button
              className="mb-4 bg-yellow-600 p-2 mx-auto text-center border border-black"
              funcOnclick={handleCreateUser}
            >
              Cadastrar-se
            </button> */}
        </div>
      </div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,.5)',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
        onClick={() => setModalOpened(false)}
      ></div>
    </>
  );
};

export default CreateUserModal;
