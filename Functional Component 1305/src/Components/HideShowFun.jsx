import { useState } from "react"

function HideShowFun() {
    const [isClick, setClick] = useState(true)
    const [onClick, setonClick] = useState(true)

    // const [state, setState] = useState({     // we can write like this instead of above
    //     isClick: true,
    //     onClick: true
    // })    


    const btn = () => {
        setClick(!isClick)
    }
    const btn1 = () => {
        setonClick(!onClick)
    }

    return (
        <div>
            <div>
                <h1>{isClick ? "John" : ""}</h1>
                <button onClick={btn}>{!isClick ? "Show" : "Hide"}</button>
            </div>
            <div>
                <h1>{onClick ? "Williams" : ""}</h1>
                <button onClick={btn1}>{!onClick ? "Show" : "Hide"}</button>
            </div>
        </div>
    )
}
export default HideShowFun