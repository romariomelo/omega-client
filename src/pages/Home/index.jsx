import { Component } from "react"
import Input from "../../components/input"


class Home extends Component{

    render(){
        return(
            <div className="flex">
                <aside className="bg-blue-500 w-2/5 h-screen"></aside>
                <main>
                    <Input />
                </main>
            </div>
            
        )
    }
}
export default Home