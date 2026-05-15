import { useState } from "react"
import "../App.css"

function DarkLightfun() {
    const [isClick, setClick] = useState(true)
    const Mode = () => {
        setClick(!isClick)
    }
    return (
        <div className={!isClick ? "Dark" : "Light"}>
            <h1 style={!isClick ? { color:"white" } : { color:"black" }}>This is {!isClick ? "Dark" : "Light"} mode</h1>
            <button onClick={Mode}>{isClick ? "Dark" : "Light"} Mode</button>
        </div>
    )
} export default DarkLightfun