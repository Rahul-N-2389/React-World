import { useState } from "react"

function LoginOut() {
    const [value, setvalue] = useState(false)
    const onBtn = () => {

        setvalue(!value)
    }
    return (
        <div>
            <h1>This is {!value ? "LogIn" : "LogOut"} Page</h1>
            <button onClick={onBtn}>{!value ? "LogIn" : "LogOut"}</button>
        </div>
    )

}
export default LoginOut