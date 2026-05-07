import React from "react";
import "../App.css"

class DarkLightMode extends React.Component {
    state = { ClkBtn: true }
    ClkBtn1 = () => {
        this.setState({ ClkBtn: !this.state.ClkBtn })
    }
    render() {
        return (
            <div className={this.state.ClkBtn ? "bg-1" : "bg-2"}>
                <h1 >{this.state.ClkBtn ? "This is DarkMode" : "This is LightMode"}</h1>
                <button onClick={this.ClkBtn1}>{this.state.ClkBtn ? "LightMode" : "DarkMode"}</button>
            </div>
        )
    }
}
export default DarkLightMode