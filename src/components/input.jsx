import { Component } from "react";


class Input extends Component{

    render(){
        return(
            <input className="m-5 p-3 border-black border-2 w-80 self-center" placeholder={this.props.placeholder}></input>
        )
    }
}
export default Input
