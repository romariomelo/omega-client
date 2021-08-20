import Divider from "../components/divider"
import Header from "../components/header"
import Input from "../components/input"
import Label from "../components/label"
import SmallButton from "../components/smallButton"


function Form(){
    return(
        <>
        <Header />
        <h1 className="text-center text-3xl my-6">
            Crie sua proposta
        </h1>
        <div className="w-3/4 border border-blue-900 mx-auto p-8">
            <form>
                <div className="flex justify-around">
                    <div>
                        <Label content={'Data Inicial:'}/>
                        <br/>
                        <Input width={'w-48'} placeholder={'Ex: 21/08/2021'} />
                    </div>
                    <div>
                        <Label content={'Data Final:'}/>
                        <br/>
                        <Input width={'w-48'} placeholder={'Ex: 22/08/2021'}/>
                    </div>
                </div>
                <Divider />
                <div className="flex justify-around">
                    <div>
                        <h1 className="m-5 text-2xl text-center">
                            Adicionar Carga
                        </h1>
                        <div className="flex">
                            <div>
                                <Label content={'Empresa'}/>
                                <br/>
                                <Input width={'w-40'} placeholder={'Ex: Omega'}/>
                            </div>
                            <div>
                                <Label content={'kWh'}/>
                                <br/>
                                <Input width={'w-40'} placeholder={'Ex: 120'}/>
                            </div>
                        </div>
                        <SmallButton bgColor={'bg-green-500'} content={'Adicionar'} detail={'mx-auto'}/>
                    </div>
                    <div>
                        <h1 className="m-5 text-2xl">
                            Cargas
                        </h1>
                    </div>
                </div>
                <Divider />
                <div className="flex justify-around">
                    <div>
                        <Label content={"Fonte de Energia"}/>
                        <br/><br/>
                        <Input type={'radio'} content={'Convencional'} name={'fonteDeEnergia'}/>
                        <br/>
                        <Input type={'radio'} content={'Renovável'} name={'fonteDeEnergia'}/>
                    </div>
                    <div>
                        <Label content={"Submercado"}/>
                        <br/><br/>
                        <Input type={'radio'} content={'Norte'} name={'submercado'}/>
                        <br/>
                        <Input type={'radio'} content={'Nordeste'} name={'submercado'}/>
                        <br/>
                        <Input type={'radio'} content={'Sul'} name={'submercado'}/>
                        <br/>
                        <Input type={'radio'} content={'Sudeste'} name={'submercado'}/>
                    </div>
                </div>
                <Divider />
                <div className="flex justify-around">
                    <div>
                        <Label content={"Estado da Contratação"}/>
                        <br/><br/>
                        <Input type={'radio'} content={'Contratado'} name={'estadoDaContratacao'}/>
                        <br/>
                        <Input type={'radio'} content={'Não Contratado'} name={'estadoDaContratacao'}/>
                    </div>
                    <div>
                        <h1 className="text-2xl">
                            Valor da Proposta
                        </h1>
                        <br/><br/>
                        <div className="text-2xl text-center bg-gray-100 py-2 border border-blue-900">
                            R$
                        </div>
                    </div>
                </div>
                <button className="text-3xl mx-auto block mt-6 bg-green-500 py-2 px-6 border border-black" type='submit'>
                    Salvar Proposta
                </button>
            </form>
        </div>
        </>
    )
}
export default Form