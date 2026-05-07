import {Component} from "react";

class ShowHide extends Component{
    state={IsBtn1:true,IsBtn2:true}

    ShBtn =()=>{
        this.setState({IsBtn1:!this.state.IsBtn1})
    }
    HdBtn =()=>{
        this.setState({IsBtn2:!this.state.IsBtn2})
    }
    render(){
        return(
            <div>
                <div>
                    <h1>{this.state.IsBtn1?"Dark World":""}</h1>
                    <button onClick={this.ShBtn}>{!this.state.IsBtn1?"Show":"Hide"}</button>
                </div>
                <div>
                    <h1>{this.state.IsBtn2?"Dark Web":""}</h1>
                    <button onClick={this.HdBtn}>{!this.state.IsBtn2?"Show":"Hide"}</button>
                </div>
            </div>
        )
    }

}
export default ShowHide