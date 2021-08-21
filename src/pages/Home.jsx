import Input from "../components/input"
import SolarEnergyImage from "../assets/solar-energy-image.svg"
import OmegaLogo from "../assets/omega-logo.svg"
import LargeButton from "../components/largeButton"
import { useOmegaClienteContext } from "../context/OmegaClientContext"

function Home() {
  const { handleLogin } = useOmegaClienteContext()
  return (
    <div className="flex h-screen w-screen">
      <div className="bg-blue-500 w-2/5 h-full min-h-full">
        <h1 className="text-white text-center text-4xl mx-10 mt-16 mb-12 font-semibold">
          Gerencie suas propostas de um jeito simplês e fácil
        </h1>
        <img className="mx-auto w-2/4 h-2/4" src={SolarEnergyImage} />
        <h3 className="text-white text-center text-2xl mt-12 font-medium">
          Deixa que a Omega simplifica sua vida
        </h3>
      </div>
      <main className="h-screen w-3/5">
        <h1 className="text-center text-5xl text-blue-900 mt-24">Omega</h1>
        <h2 className="text-center w-52 mx-auto mt-4 text-4xl pb-2.5 bg-yellow-600 text-white">
          propostas
        </h2>
        <div className="flex mx-auto mt-16 flex-col">
          <Input
            placeholder={"Email"}
            className="width={'w-80'}"
            name={"email"}
          />
          <Input
            placeholder={"Senha"}
            className="width={'w-80'}"
            name={"password"}
          />
        </div>
        <LargeButton content={"Entrar"} funcOnclick={handleLogin} />
        <h4 className="text-center text-2x1">Ainda não é membro?</h4>
        <h4
          className="text-center text-yellow-600 font-bold text-2x1 cursor-pointer"
          onClick={console.log("Teste")}
        >
          Cadastre-se
        </h4>
      </main>
      <div
        className={`absolute w-1/3 h-3/4 bg-gray-100 m-auto inset-0 border border-black`}
      >
        <img src={OmegaLogo} className="h-12 m-4" />

        <form>
          <div className="flex flex-col">
            <Input placeholder={"Nome de Uusário"} name={"name"} />
            <Input placeholder={"Email"} name={"email"} />
            <Input placeholder={"Senha"} name={"password"} />
            <br />
            <button className="mb-4 bg-yellow-600 p-2 mx-auto text-center border border-black">
              Cadastrar-se
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Home
