import { useOmegaClienteContext } from "../../context/OmegaClientContext"
import Input from "../../components/input"
import SolarEnergyImage from "../../assets/solar-energy-image.svg"

function Home() {
  const { handleLogin } = useOmegaClienteContext()
  return (
    <div className="flex h-screen w-screen">
      <aside className="bg-blue-500 w-2/5 h-screen">
        <h1 className="text-white text-center text-4xl mx-10 mt-16 mb-12 font-semibold">
          Gerencie suas propostas de um jeito simplês e fácil
        </h1>
        <img className="mx-auto" src={SolarEnergyImage} />
        <h3 className="text-white text-center text-2xl mt-12 font-medium">
          Deixa que a Omega simplifica sua vida
        </h3>
      </aside>
      <main className="h-screen w-3/5">
        <h1 className="text-center text-5xl text-blue-900 mt-24">Omega</h1>
        <h2 className="text-center w-52 mx-auto mt-4 text-4xl pb-2.5 bg-yellow-600 text-white">
          propostas
        </h2>
        <div className="flex mx-auto mt-20 flex-col">
          <Input placeholder={"Usuário"} className="" />
          <Input placeholder={"Senha"} className="" />
        </div>
        <h4 className="text-center text-2x1">Ainda não é membro?</h4>
        <h4 className="text-center text-yellow-600 font-bold text-2x1">
          <a>Cadastre-se</a>
        </h4>
      </main>
    </div>
  )
}
export default Home
