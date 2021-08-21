import { Link } from 'react-router-dom';
import OmegaLogo from '../assets/omega-logo.svg';
import PersonSilhouette from '../assets/person-silhouette.svg';
import { useOmegaClienteContext } from '../context/OmegaClientContext';

function Header() {
  const { usuario } = useOmegaClienteContext();
  return (
    <>
      <div className="flex flex-nowrap justify-between">
        <Link to='/propostas'>
          <img src={OmegaLogo} className="h-20 m-8" alt="logo" />
        </Link>
        <div className="justify-self-end flex">
          <img
            src={PersonSilhouette}
            className="bg-yellow-600 my-auto p-2 w-12 h-12"
            alt="Icon"
          />
          <p className="mr-10 border-2 border-yellow-500 border-l-0 h-12 my-auto px-2 py-2">
            {usuario.name}
          </p>
        </div>
      </div>
    </>
  );
}
export default Header;
