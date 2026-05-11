import { Component } from "react";
class Calculator extends Component {
    state = { value: "" }
    onBtn = (event) => {
        this.setState({ value: this.state.value + event.target.textContent })
        // console.log(event.target.textContent);
    }
    acBtn = () => {
        this.setState({ value: "" })
    }
    delBtn = () => {
        this.setState({ value: this.state.value.slice(0, this.state.value.length - 1) })
    }
    

    render() {
        return (
            <div id="body">
                <div id="box">
                    <div id="display" > {this.state.value}</div>
                    <div id="btn">
                        <button onClick={this.acBtn}>AC</button>
                        <button onClick={this.delBtn}>DEL</button>
                        <button onClick={this.onBtn}>%</button>
                        <button onClick={this.onBtn}>/</button>
                    </div>
                    <div id="btn">
                        <button onClick={this.onBtn}>1</button>
                        <button onClick={this.onBtn}>2</button>
                        <button onClick={this.onBtn}>3</button>
                        <button onClick={this.onBtn}>+</button>
                    </div>
                    <div id="btn">
                        <button onClick={this.onBtn}>4</button>
                        <button onClick={this.onBtn}>5</button>
                        <button onClick={this.onBtn}>6</button>
                        <button onClick={this.onBtn}>-</button>
                    </div>
                    <div id="btn">
                        <button onClick={this.onBtn}>7</button>
                        <button onClick={this.onBtn}>8</button>
                        <button onClick={this.onBtn}>9</button>
                        <button onClick={this.onBtn}>*</button>
                    </div>
                    <div id="btn">
                        <button onClick={this.onBtn}>0</button>
                        <button onClick={this.onBtn}>00</button>
                        <button onClick={this.onBtn}>.</button>
                        <button onClick={()=>this.setState({value:eval(this.state.value)})}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Calculator

/**
 * import { Component } from "react";
import "../App.css"
class Calculator extends Component {

    state={value:""}

    onBtn=(event)=>{
        this.setState({value:this.state.value+event.target.textContent})

    }

    onDelBtn=()=>{
        this.setState({value:this.state.value.slice(0,this.state.value.length-1)})
    }

    render() {
        return (
            <div className="bg">
                <div className="display">{this.state.value}</div>
                <div>
                    <button onClick={()=>this.setState({value:""})}>AC</button>
                    <button onClick={this.onDelBtn}>DEL</button>
                    <button onClick={this.onBtn}>%</button>
                    <button onClick={this.onBtn}>/</button>
                </div>
                <div>
                    <button onClick={this.onBtn}>7</button>
                    <button onClick={this.onBtn}>8</button>
                    <button onClick={this.onBtn}>9</button>
                    <button onClick={this.onBtn}>*</button>
                </div>
                <div>
                    <button onClick={this.onBtn}>4</button>
                    <button onClick={this.onBtn}>5</button>
                    <button onClick={this.onBtn}>6</button>
                    <button onClick={this.onBtn}>-</button>
                </div>
                <div>
                    <button onClick={this.onBtn}>1</button>
                    <button onClick={this.onBtn}>2</button>
                    <button onClick={this.onBtn}>3</button>
                    <button onClick={this.onBtn}>+</button>
                </div>
                <div>
                    <button onClick={this.onBtn}>0</button>
                    <button onClick={this.onBtn}>00</button>
                    <button onClick={this.onBtn}>.</button>
                    <button onClick={()=>this.setState({value:eval(this.state.value)})}>=</button>
                </div>
            </div>
        )
    }
}

export default Calculator
 */