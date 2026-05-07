import React from "react";
import "../App.css"


class Counter extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={count:0}
    // }
    state = { count: 0 }

    onIncBtn = () => {
        // this.state.count = this.state.count + 1    // this type only change in console
        // console.log(this.state);
        this.setState({count:this.state.count+1})    // to asign value in h1 tag we use setState
    }
    onRtBtn=()=>{
        this.setState({count:0})
    }

    onDecBtn=()=>{
        this.setState({count:this.state.count-1})
    }
    render() {
        return (
            <div className="bg">
                <div className="card">
                    <h1>Counter Application</h1>
                    <h1>{this.state.count}</h1>
                    <div>
                        <button onClick={this.onIncBtn}>Increment</button>
                        <button onClick={this.onRtBtn}>Reset</button>
                        <button onClick={this.onDecBtn}>Decrement</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Counter